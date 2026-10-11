'use client';

import { useState, useEffect } from 'react';
import { profileData } from '../data/profile';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ShowcaseCarousel from '../components/ShowcaseCarousel';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LightboxModal from '../components/LightboxModal';

export default function Home() {
  const [avatarUrl, setAvatarUrl] = useState(profileData.defaultAvatarUrl);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    image: '',
    title: '',
    alt: '',
  });

  // Load avatar if stored in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('saiphh_avatar_url');
      if (saved) {
        setAvatarUrl(saved);
      }
    } catch (err) {
      console.warn('Could not read localStorage:', err);
    }
  }, []);

  const handleOpenLightbox = (image, title, alt) => {
    setLightboxState({
      isOpen: true,
      image,
      title,
      alt,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      image: '',
      title: '',
      alt: '',
    });
  };

  return (
    <main>
      {/* Top Navbar */}
      <Navbar avatarUrl={avatarUrl} />

      {/* Hero Section with Upright 3D Coin & Centered Clean Bio */}
      <Hero
        profile={profileData}
        currentAvatarUrl={avatarUrl}
      />

      {/* Dual-Row Carousel: Row 1 Left, Row 2 Right */}
      <ShowcaseCarousel
        images={profileData.galleryImages}
        onSelectImage={handleOpenLightbox}
      />

      {/* Clean Contacts Section with "Infinity Wonderful" */}
      <ContactSection
        contactData={profileData.contact}
      />

      {/* Footer */}
      <Footer />

      {/* Image Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        image={lightboxState.image}
        title={lightboxState.title}
        alt={lightboxState.alt}
        onClose={handleCloseLightbox}
      />
    </main>
  );
}
