'use client';

import styles from './ShowcaseSection.module.css';

export default function ShowcaseSection({ parts, onSelectImage }) {
  return (
    <section id="showcase" className={styles.showcaseSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <span className={styles.studDot}>❖</span>
          <span>PORTFOLIO & EXPERIENCE // 5 CHAPTERS</span>
        </div>
        <h2 className={styles.sectionTitle}>
          Building The Metaverse, <span className={styles.highlight}>Block By Block</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Explore my journey, design philosophy, environmental builds, and specialized skill sets.
          Click any showcase image to preview in high definition.
        </p>
      </div>

      <div className={styles.partsContainer}>
        {parts.map((part, index) => {
          // Alternating sides:
          // index 0 (Part 1): image on left, text on right
          // index 1 (Part 2): text on left, image on right
          // index 2 (Part 3): image on left, text on right
          // index 3 (Part 4): text on left, image on right
          // index 4 (Part 5): image on left, text on right
          const isTextLeft = part.align === 'left' || index % 2 === 1;

          return (
            <div
              key={part.id}
              className={`${styles.partCard} ${isTextLeft ? styles.textLeft : styles.textRight}`}
            >
              {/* Image Column */}
              <div className={styles.imageColumn}>
                <div
                  className={styles.imageFrame}
                  onClick={() => onSelectImage(part.image, part.title, part.imageAlt)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Enlarge build image for ${part.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectImage(part.image, part.title, part.imageAlt);
                    }
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={part.image}
                    alt={part.imageAlt}
                    className={styles.buildImage}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.expandPrompt}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                      <span>Click to Enlarge</span>
                    </div>
                  </div>
                  <div className={styles.cornerStudTL} />
                  <div className={styles.cornerStudBR} />
                </div>

                {/* Tags below image */}
                <div className={styles.tagList}>
                  {part.tags && part.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text / Content Column */}
              <div className={styles.textColumn}>
                <div className={styles.partNumberWrapper}>
                  <span className={styles.partNumber}>PART {part.number}</span>
                  <div className={styles.numberDivider} />
                  <span className={styles.partBadge}>{part.badge}</span>
                </div>

                <h3 className={styles.partTitle}>{part.title}</h3>

                {/* User's Exact Description Text */}
                <div className={styles.partContent}>
                  {part.content.includes('**Studs-style builds**') ? (
                    <p>
                      Hey! I&apos;m a Roblox Studio Builder with over 5 years of building experience, specializing in{' '}
                      <strong className={styles.boldHighlight}>Studs-style builds</strong> while being adaptable to a wide variety of building styles.
                    </p>
                  ) : (
                    <p>{part.content}</p>
                  )}
                </div>

                {/* If Part 5: Specialities Interactive List */}
                {part.specialitiesList && (
                  <div className={styles.specialitiesGrid}>
                    <h4 className={styles.specialitiesHeading}>❖ My Specialities:</h4>
                    <ul className={styles.specialitiesList}>
                      {part.specialitiesList.map((item, i) => (
                        <li key={i} className={styles.specialityItem}>
                          <div className={styles.specialityBullet}>
                            <span className={styles.studGlow}>❖</span>
                          </div>
                          <div>
                            <strong className={styles.specialityTitle}>{item.title}</strong>
                            <p className={styles.specialityDesc}>{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mini Stats Bar */}
                {part.stats && (
                  <div className={styles.partStats}>
                    {part.stats.map((stat, sIndex) => (
                      <div key={sIndex} className={styles.statBox}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
