'use client';

import { useState } from 'react';
import styles from './AvatarModal.module.css';

export default function AvatarModal({ isOpen, onClose, currentAvatarUrl, onSave, defaultUrl }) {
  const [inputUrl, setInputUrl] = useState(currentAvatarUrl || '');
  const [previewUrl, setPreviewUrl] = useState(currentAvatarUrl || '');
  const [testError, setTestError] = useState(false);

  if (!isOpen) return null;

  const handleTestUrl = () => {
    setTestError(false);
    setPreviewUrl(inputUrl);
  };

  const handleResetToDefault = () => {
    setInputUrl(defaultUrl);
    setPreviewUrl(defaultUrl);
    setTestError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    onSave(inputUrl.trim());
    onClose();
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.headerTitle}>
            <div className={styles.iconBadge}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h3>Update 3D Avatar</h3>
              <p>Change your Discord avatar or image link in real time</p>
            </div>
          </div>
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close Modal">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.previewSection}>
            <div className={styles.previewRing}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt="Avatar Preview"
                className={styles.previewImage}
                onError={() => setTestError(true)}
              />
            </div>
            <div className={styles.previewMeta}>
              <span className={styles.previewLabel}>Current Live Preview</span>
              {testError ? (
                <span className={styles.errorBadge}>⚠️ Failed to load image</span>
              ) : (
                <span className={styles.successBadge}>✓ Image Loaded</span>
              )}
              <span className={styles.previewHelp}>
                The 3D model, head texture, and cards will update dynamically!
              </span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="avatar-url-input">Avatar Image URL (Discord CDN, Imgur, GitHub, etc.)</label>
            <div className={styles.inputRow}>
              <input
                id="avatar-url-input"
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://cdn.discordapp.com/avatars/..."
                className={styles.textInput}
                required
              />
              <button
                type="button"
                onClick={handleTestUrl}
                className={styles.secondaryBtn}
              >
                Preview
              </button>
            </div>
            <span className={styles.hint}>
              Tip: In Discord, right-click your profile picture &gt; Copy Link, and paste it here.
            </span>
          </div>

          <div className={styles.actionButtons}>
            <button
              type="button"
              onClick={handleResetToDefault}
              className={styles.textBtn}
            >
              Reset to Default
            </button>
            <div className={styles.rightActions}>
              <button
                type="button"
                onClick={onClose}
                className={styles.cancelBtn}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.saveBtn}
              >
                Save & Apply to 3D Player
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
