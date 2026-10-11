'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './LightboxModal.module.css';
import { withBase } from '../lib/withBase';

export default function LightboxModal({ isOpen, image, title, alt, originRect, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef(null);
  const modalRef = useRef(null);

  // Reset closing state every time the modal opens (or image changes)
  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, [isOpen, image]);

  // Morph animation: the photo grows from the clicked thumbnail to the center (250ms).
  // Falls back to the CSS scaleIn animation when opened without a position (keyboard).
  useEffect(() => {
    if (!isOpen || !originRect || !modalRef.current) return;
    const el = modalRef.current;
    const raf = requestAnimationFrame(() => {
      const final = el.getBoundingClientRect();
      if (!final.width || !final.height) return;
      const originCx = originRect.left + originRect.width / 2;
      const originCy = originRect.top + originRect.height / 2;
      const finalCx = final.left + final.width / 2;
      const finalCy = final.top + final.height / 2;
      const dx = originCx - finalCx;
      const dy = originCy - finalCy;
      const sx = originRect.width / final.width;
      const sy = originRect.height / final.height;
      el.animate(
        [
          { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, opacity: 0.4 },
          { transform: 'translate(0px, 0px) scale(1, 1)', opacity: 1 },
        ],
        { duration: 250, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
      );
    });
    return () => cancelAnimationFrame(raf);
  }, [isOpen, originRect, image]);

  // Smooth exit: play the closing animation first, then really close
  const handleRequestClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      onClose();
    }, 240);
  };

  if (!isOpen || !image) return null;

  return (
    <div
      className={`${styles.backdrop}${isClosing ? ` ${styles.backdropClosing}` : ''}`}
      onClick={handleRequestClose}
    >
      <div
        ref={modalRef}
        className={`${styles.modalContent}${isClosing ? ` ${styles.modalClosing}` : ''}`}
        style={originRect ? { animation: 'none' } : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleRequestClose}
          aria-label="Close Preview"
        >
          ✕
        </button>

        <div className={styles.imageFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase(image)} alt={alt || title} className={styles.fullImage} />
          <span className={styles.watermark}>Saiphh</span>
        </div>

        <div className={styles.captionBar}>
          <div className={styles.captionLeft}>
            <span className={styles.dot}>❖</span>
            <span className={styles.captionTitle}>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
