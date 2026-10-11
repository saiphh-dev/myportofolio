'use client';

import styles from './LightboxModal.module.css';
import { withBase } from '../lib/withBase';

export default function LightboxModal({ isOpen, image, title, alt, onClose }) {
  if (!isOpen || !image) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
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
