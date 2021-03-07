import React from 'react';
import styles from './footer.module.css'

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://shubhamprakashjha.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerText}
      >
        <span className={styles.creator}>Developed by:</span> Shubham Prakash
      </a>
    </footer>
  );
}

export default SiteFooter
