'use client';

import styles from './ShowcaseCarousel.module.css';

export default function ShowcaseCarousel({ images = [], onSelectImage }) {
  if (!images || images.length === 0) return null;

  // Duplicate items 4 times to guarantee a seamless infinite loop across all screen sizes
  const repeatedRow1 = [...images, ...images, ...images, ...images];
  // Staggered / reversed for row 2 to give variety
  const repeatedRow2 = [...images.slice().reverse(), ...images.slice().reverse(), ...images.slice().reverse(), ...images.slice().reverse()];

  return (
    <section id="showcase" className={styles.carouselSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Builds Showcase</h2>
        <p className={styles.sectionSubtitle}>
          Interactive dual-row carousel // Click any build to inspect in full resolution
        </p>
      </div>

      <div className={styles.carouselContainer}>
        {/* Row 1: Scrolls to the LEFT */}
        <div className={styles.trackWrapper}>
          <div className={`${styles.marqueeTrack} ${styles.scrollLeft}`}>
            {repeatedRow1.map((item, index) => (
              <div
                key={`row1-${index}`}
                className={styles.imageCard}
                onClick={() => onSelectImage(item.src, item.title, item.alt)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectImage(item.src, item.title, item.alt);
                  }
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.imageTitle}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls to the RIGHT */}
        <div className={styles.trackWrapper}>
          <div className={`${styles.marqueeTrack} ${styles.scrollRight}`}>
            {repeatedRow2.map((item, index) => (
              <div
                key={`row2-${index}`}
                className={styles.imageCard}
                onClick={() => onSelectImage(item.src, item.title, item.alt)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectImage(item.src, item.title, item.alt);
                  }
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.imageTitle}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
