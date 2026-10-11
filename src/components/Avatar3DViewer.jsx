'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './Avatar3DViewer.module.css';
import { withBase } from '../lib/withBase';

export default function Avatar3DViewer({ avatarUrl }) {
  const containerRef = useRef(null);
  const sceneStateRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    coinGroup: null,
    frontMaterial: null,
    backMaterial: null,
    isDragging: false,
    dragButton: 0,
    previousMousePosition: { x: 0, y: 0 },
    animFrameId: null,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 380;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera: Wide field with safe distance to ensure coin is never cut off
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);
    camera.lookAt(0, 0, 0);

    // 3. WebGL Renderer with full alpha transparency
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(3, 4, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc084fc, 1.0);
    dirLight2.position.set(-3, -2, -3);
    scene.add(dirLight2);

    // 5. Coin Group
    const coinGroup = new THREE.Group();
    scene.add(coinGroup);

    const radius = 1.15;
    const thickness = 0.05;

    // Crisp Pure White Outer Border Ring
    const borderRingGeo = new THREE.TorusGeometry(radius, 0.035, 24, 96);
    const borderRingMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const borderRingMesh = new THREE.Mesh(borderRingGeo, borderRingMat);
    coinGroup.add(borderRingMesh);

    // Pure White Rim Edge
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const rimGeo = new THREE.CylinderGeometry(radius, radius, thickness, 64, 1, true);
    rimGeo.rotateX(Math.PI / 2);
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    coinGroup.add(rimMesh);

    // Front & Back face materials: clean upright texture discs
    const frontMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.FrontSide,
    });
    const backMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.FrontSide,
    });

    // Front Disc
    const frontGeo = new THREE.CircleGeometry(radius, 64);
    const frontMesh = new THREE.Mesh(frontGeo, frontMat);
    frontMesh.position.z = thickness / 2 + 0.001;
    coinGroup.add(frontMesh);

    // Back Disc (facing -Z)
    const backGeo = new THREE.CircleGeometry(radius, 64);
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.rotation.y = Math.PI;
    backMesh.position.z = -thickness / 2 - 0.001;
    coinGroup.add(backMesh);

    sceneStateRef.current = {
      scene,
      camera,
      renderer,
      coinGroup,
      frontMaterial: frontMat,
      backMaterial: backMat,
      isDragging: false,
      dragButton: 0,
      previousMousePosition: { x: 0, y: 0 },
      animFrameId: null,
    };

    // 6. Load Texture onto Front & Back Disc
    loadTexture(avatarUrl);

    // 7. Interactive Mouse / Touch Handlers
    const handleMouseDown = (e) => {
      sceneStateRef.current.isDragging = true;
      sceneStateRef.current.dragButton = e.button;
      sceneStateRef.current.previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      const state = sceneStateRef.current;
      if (!state.isDragging) {
        // Gentle hover tilt
        const rect = container.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        if (state.coinGroup) {
          state.coinGroup.rotation.x = normY * 0.08;
          state.coinGroup.rotation.z = -normX * 0.05;
        }
        return;
      }

      const deltaX = e.clientX - state.previousMousePosition.x;
      const deltaY = e.clientY - state.previousMousePosition.y;

      // Rotate cleanly on center
      state.coinGroup.rotation.y += deltaX * 0.012;
      state.coinGroup.rotation.x += deltaY * 0.01;
      // Clamp X tilt to keep coin centered and never hitting bounds
      state.coinGroup.rotation.x = Math.max(-0.5, Math.min(0.5, state.coinGroup.rotation.x));

      state.previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      sceneStateRef.current.isDragging = false;
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Zoom handler: strictly bounded so the coin NEVER hits any canvas boundary
    const handleWheel = (e) => {
      e.preventDefault();
      const state = sceneStateRef.current;
      if (state.camera) {
        state.camera.position.z += e.deltaY * 0.0025;
        // Bound between 4.5 and 6.0:
        // Even at 4.5 (max zoom in), the coin is 100% inside the canvas with generous margins!
        state.camera.position.z = Math.max(4.5, Math.min(6.0, state.camera.position.z));
      }
    };

    let touchX = 0;
    let touchY = 0;
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        sceneStateRef.current.isDragging = true;
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!sceneStateRef.current.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - touchX;
      const deltaY = e.touches[0].clientY - touchY;
      const state = sceneStateRef.current;
      state.coinGroup.rotation.y += deltaX * 0.014;
      state.coinGroup.rotation.x += deltaY * 0.01;
      state.coinGroup.rotation.x = Math.max(-0.5, Math.min(0.5, state.coinGroup.rotation.x));
      touchX = e.touches[0].clientX;
      touchY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      sceneStateRef.current.isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    dom.addEventListener('contextmenu', handleContextMenu);
    dom.addEventListener('wheel', handleWheel, { passive: false });
    dom.addEventListener('touchstart', handleTouchStart, { passive: true });
    dom.addEventListener('touchmove', handleTouchMove, { passive: true });
    dom.addEventListener('touchend', handleTouchEnd, { passive: true });

    const handleResize = () => {
      if (!container || !sceneStateRef.current.camera || !sceneStateRef.current.renderer) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      sceneStateRef.current.camera.aspect = newW / newH;
      sceneStateRef.current.camera.updateProjectionMatrix();
      sceneStateRef.current.renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      const state = sceneStateRef.current;
      const time = clock.getElapsedTime();

      // Smooth idle rotation on Y axis
      if (!state.isDragging && state.coinGroup) {
        state.coinGroup.rotation.y += 0.015;
        state.coinGroup.position.y = Math.sin(time * 2.0) * 0.03;
      }

      if (state.renderer && state.scene && state.camera) {
        state.renderer.render(state.scene, state.camera);
      }

      state.animFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (sceneStateRef.current.animFrameId) {
        cancelAnimationFrame(sceneStateRef.current.animFrameId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', handleMouseDown);
      dom.removeEventListener('contextmenu', handleContextMenu);
      dom.removeEventListener('wheel', handleWheel);
      dom.removeEventListener('touchstart', handleTouchStart);
      dom.removeEventListener('touchmove', handleTouchMove);
      dom.removeEventListener('touchend', handleTouchEnd);
      renderer.dispose();
      if (container.contains(dom)) {
        container.removeChild(dom);
      }
    };
  }, []);

  useEffect(() => {
    loadTexture(avatarUrl);
  }, [avatarUrl]);

  function loadTexture(url) {
    if (!url) return;
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');

    loader.load(
      url,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        applyTexture(texture);
      },
      undefined,
      () => {
        loader.load(withBase('/avatar.png'), (fallback) => {
          fallback.colorSpace = THREE.SRGBColorSpace;
          applyTexture(fallback);
        });
      }
    );
  }

  function applyTexture(texture) {
    const { frontMaterial, backMaterial } = sceneStateRef.current;
    if (frontMaterial) {
      frontMaterial.map = texture;
      frontMaterial.needsUpdate = true;
    }
    if (backMaterial) {
      backMaterial.map = texture;
      backMaterial.needsUpdate = true;
    }
  }

  return (
    <div className={styles.coinWrapper}>
      <div ref={containerRef} className={styles.canvasContainer} />
    </div>
  );
}
