import React from 'react';
import styles from '../styles/about.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2>About Philatos</h2>
        <p>
          <strong>Philatos</strong> is a modern mythology dictionary crafted with care by me, Sanskriti Shelke.
          It's more than just a dictionary—it's an interactive gateway into the timeless world of ancient myths.
          I created Philatos to reimagine how we connect with history: by making classical knowledge
          approachable, beautifully designed, and accessible to everyone, from students to myth enthusiasts.
          My mission is to merge technology with storytelling, bringing ancient legends into the hands of modern explorers.
        </p>
        {/* 🔮 Feature Highlights */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureBox}>
            <h4>🏺 Dynamic Greek Mythology Dictionary</h4>
            <p> Discover myths from Homer to Virgil. </p>
          </div>
          <div className={styles.featureBox}>
            <h4>🏛️ Greek to English Toggle</h4>
            <p> Translate Homeric Greek proses into English!</p>
          </div>
          <div className={styles.featureBox}>
            <h4>📜 AI-Powered Myth Recommender</h4>
            <p> Can't decide which myth to learn about? Get personalized suggestions based on your interests.</p>
          </div>
          <div className={styles.featureBox}>
            <h4>🕯️ Expandable Glossary</h4>
            <p> Build your own collection of mythological terms.</p>
          </div>
        </div>

        {/* ⭐ CTA */}
        <div className={styles.ctaBox}>
          <a href="#demo" className={styles.ctaButton}> 🚀 Try the Demo</a>
        </div>
      </div>
    </section>
  );
};

export default About;
