import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <span className={styles.studIcon}>❖</span>
            <span className={styles.brandTitle}>SAIPHH</span>
            <span className={styles.badge}>ROBLOX BUILDER</span>
          </div>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Saiphh. All rights reserved. Specializing in Studs-style and immersive Roblox Studio environments.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.deployBadge}>
            <span className={styles.dot} />
            <span>GitHub Pages &amp; GitHub Actions</span>
          </div>
          <a href="#hero" className={styles.backToTop}>
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
