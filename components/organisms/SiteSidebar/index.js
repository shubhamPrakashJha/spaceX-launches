import React from 'react';
import styles from './sidebar.module.css'

function SiteSidebar({children}) {
  return (
    <aside className={styles.sidebarWrapper}>
      {children}
    </aside>
  )
}

export default SiteSidebar
