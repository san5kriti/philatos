import React from 'react';
import styles from '../styles/Home.module.css';

const IndexPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <div className={styles.topBar}>
          <span className={styles.corner}>SS.</span>
          <div className={styles.navLinks}>
            <a href="#about">ABOUT</a>
            <a href="#demo">DEMO</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
        <div className={styles.branding}>
          <h1>PHILATOS</h1>
          <p>MYTHOLOGY DICTIONARY</p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
