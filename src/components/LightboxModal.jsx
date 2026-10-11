'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './LightboxModal.module.css';
import { withBase } from '../lib/withBase';

export default function LightboxModal({ isOpen, image, title, alt, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef(null);

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
        className={`${styles.modalContent}${isClosing ? ` ${styles.modalClosing}` : ''}`}
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
        </div>

        <div className={styles.captionBar}>
          <div className={styles.captionLeft}>
            <span className={styles.dot}>❖</span>
            <span className={styles.captionTitle}>{title}</span>
          </div>
          <a
            href={withBase(image)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.openOriginal}
          >
            Open Full Res ↗
          </a>
        </div>
      </div>
    </div>
  );
}
