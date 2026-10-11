'use client';

import styles from './Watermark.module.css';

// Shared tiled anti-theft watermark ("Saiphh" repeated diagonally),
// used on lightbox images (default 6x8) and carousel cards (small 3x4).
export default function Watermark({ rows = 6, cols = 8, small = false }) {
  return (
    <div className={`${styles.layer}${small ? ` ${styles.small}` : ''}`} aria-hidden="true">
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} className={styles.row}>
          {Array.from({ length: cols }).map((_, col) => (
            <span key={col}>Saiphh</span>
          ))}
        </div>
      ))}
    </div>
  );
}
