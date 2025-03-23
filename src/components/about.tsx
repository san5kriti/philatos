import React from 'react';
import styles from '../styles/about.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2>About Philatos</h2>
        <p>
          Philatos is a modern mythology dictionary that bridges ancient wisdom with modern design.
          It serves as a curated space for storytellers, history lovers, and digital explorers.
        </p>

        {/* 🔮 Feature Highlights */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureBox}>
            <h4>⚡ Fast & Lightweight</h4>
            <p>Optimized for speed and smooth performance across devices.</p>
          </div>
          <div className={styles.featureBox}>
            <h4>🏛️ Authentic Greek Design</h4>
            <p>Inspired by ancient scripts, temples, and timeless mythology.</p>
          </div>
          <div className={styles.featureBox}>
            <h4>🧠 Offline Ready</h4>
            <p>Access key entries even when you’re disconnected.</p>
          </div>
          <div className={styles.featureBox}>
            <h4>📚 Expandable Glossary</h4>
            <p>Build your personal collection of mythological terms.</p>
          </div>
        </div>

        {/* ⭐ CTA */}
        <div className={styles.ctaBox}>
          <a href="#demo" className={styles.ctaButton}>🚀 Try the Demo</a>
        </div>
      </div>
    </section>
  );
};

export default About;
