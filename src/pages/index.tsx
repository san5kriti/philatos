import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const letters = [
  { greek: 'Φ', latin: 'P' },
  { greek: 'Ι', latin: 'H' },
  { greek: 'Λ', latin: 'I' },
  { greek: 'Α', latin: 'L' },
  { greek: 'Τ', latin: 'A' },
  { greek: 'Ο', latin: 'T' },
  { greek: 'Σ', latin: 'O' },
  { greek: ' ', latin: 'S' }
];

const IndexPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="background.mp4" type="video/mp4" />
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
          <motion.h1 className={styles.morphRow}>
            {/* GREEK word typewriter */}
            <motion.div
              className={styles.wordRow}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.25
                  }
                }
              }}
            >
              {letters.map((l, idx) => (
                <motion.span
                  key={idx}
                  className={styles.letterWrapper}
                  variants={{
                    visible: {
                      opacity: [0, 1],
                      transition: {
                        duration: 0.4
                      }
                    }
                  }}
                >
                  {l.greek}
                </motion.span>
              ))}
            </motion.div>

            {/* pause */}
            <motion.div
              animate={{
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 6,
                times: [0, 0.2, 0.8, 1],
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className={styles.placeholder}
            />

            {/* ENGLISH word typewriter */}
            <motion.div
              className={styles.wordRow}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.25,
                    delayChildren: 2// pause before English starts
                  }
                }
              }}
            >
              {letters.map((l, idx) => (
                <motion.span
                  key={idx}
                  className={styles.letterWrapper}
                  variants={{
                    visible: {
                      opacity: [0, 1],
                      transition: {
                        duration: 0.4
                      }
                    }
                  }}
                >
                  {l.latin}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>

          <p>MYTHOLOGY DICTIONARY</p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
