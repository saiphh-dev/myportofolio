'use client';

import { useState } from 'react';
import styles from './ContactSection.module.css';

// Exact SVG Icons for TikTok, Discord, GitHub, YouTube, and Roblox
function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.8a8.3 8.3 0 0 0 4.77 1.48v-3.4a4.88 4.88 0 0 1-1-.19z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function RobloxIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      {/* Official Roblox Tilt Square Logo */}
      <path d="M5.33 0L0 18.67l18.67 5.33L24 5.33 5.33 0zm9.44 14.16l-4.72-1.35 1.35-4.72 4.72 1.35-1.35 4.72z" />
    </svg>
  );
}

export default function ContactSection({ contactData }) {
  const [copied, setCopied] = useState(false);

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'tiktok':
        return <TikTokIcon />;
      case 'discord':
        return <DiscordIcon />;
      case 'github':
        return <GitHubIcon />;
      case 'youtube':
        return <YouTubeIcon />;
      case 'roblox':
        return <RobloxIcon />;
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        );
    }
  };

  const copyDiscordInvite = () => {
    navigator.clipboard.writeText('https://discord.gg/bnPYZMvABA');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <div className={styles.contactCard}>
          <div className={styles.badge}>
            <span className={styles.studDot}>❖</span>
            <span>CONTACT & COLLABORATION</span>
          </div>

          <h2 className={styles.title}>{contactData.heading || 'Let’s Build Something Amazing'}</h2>

          {/* Exact text requested by user */}
          <blockquote className={styles.quoteMessage}>
            &ldquo;{contactData.message}&rdquo;
          </blockquote>

          {/* Small Icons that redirect to each site on click */}
          <div className={styles.iconsRow}>
            {contactData.links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconButton}
                title={`${link.platform}: ${link.handle}`}
                aria-label={`Visit Saiphh on ${link.platform}`}
              >
                <div className={styles.iconGlyph}>
                  {getPlatformIcon(link.platform)}
                </div>
                <span className={styles.iconTooltip}>{link.platform}</span>
                <div className={styles.iconGlow} />
              </a>
            ))}
          </div>

          {/* Quick Discord Action */}
          <div className={styles.discordHelper}>
            <button
              type="button"
              onClick={copyDiscordInvite}
              className={styles.copyDiscordBtn}
            >
              <DiscordIcon />
              <span>{copied ? '✓ Discord Invite Copied!' : 'Join Discord Server'}</span>
            </button>
            <span className={styles.discordTag}>Infinity Wonderful</span>
          </div>
        </div>
      </div>
    </section>
  );
}
