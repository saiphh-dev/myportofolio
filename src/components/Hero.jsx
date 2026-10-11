'use client';

import Avatar3DViewer from './Avatar3DViewer';
import styles from './Hero.module.css';

export default function Hero({ profile, currentAvatarUrl }) {
  const desc = profile.description || {};

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* Top: 3D Coin Avatar */}
        <div className={styles.avatar3DContainer}>
          <Avatar3DViewer avatarUrl={currentAvatarUrl} />
        </div>

        {/* Name: "Saiphh" (clean, sleek, not overly large) */}
        <div className={styles.nameWrapper}>
          <h1 className={styles.heroName}>
            <span className={styles.nameGradient}>{profile.name}</span>
          </h1>

          <p className={styles.heroSubtitle}>
            {profile.role} <span className={styles.separator}>//</span> {profile.experience}
          </p>

          {/* Unified Centered Description: Small, clean and readable */}
          <div className={styles.cleanBio}>
            <p className={styles.bioParagraph}>
              Hey! I&apos;m a Roblox Studio Builder with over 5 years of building experience, specializing in{' '}
              <strong className={styles.bioHighlight}>Studs-style builds</strong> while being adaptable to a wide variety of building styles.
            </p>

            <p className={styles.bioParagraph}>
              I&apos;m passionate about creating detailed, visually appealing environments and bringing ideas to life through creative building. While Studs-style building is my main specialty, I&apos;m comfortable adapting to different styles, themes, and project requirements to achieve the desired result.
            </p>

            <p className={styles.bioParagraph}>
              I&apos;m always focused on delivering quality builds, paying attention to detail, and making sure each project meets the client&apos;s vision.
            </p>

            <div className={styles.specialtiesBox}>
              <span className={styles.specialtiesTitle}>My Specialities:</span>
              <ul className={styles.specialtiesList}>
                {desc.specialties ? (
                  desc.specialties.map((item, idx) => (
                    <li key={idx} className={styles.specialtyItem}>
                      <span className={styles.dot}>❖</span>
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className={styles.specialtyItem}><span className={styles.dot}>❖</span> Studs-style building</li>
                    <li className={styles.specialtyItem}><span className={styles.dot}>❖</span> Custom environments and structures</li>
                    <li className={styles.specialtyItem}><span className={styles.dot}>❖</span> Creative and detailed builds</li>
                    <li className={styles.specialtyItem}><span className={styles.dot}>❖</span> Adaptability to different building styles</li>
                    <li className={styles.specialtyItem}><span className={styles.dot}>❖</span> Client-focused projects</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Clean Action CTAs */}
          <div className={styles.ctaGroup}>
            <a href="#showcase" className={styles.primaryCta}>
              <span>View Showcase</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>

            <a href="#contact" className={styles.secondaryCta}>
              <span>Contact Me</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
