import Head from 'next/head';
import React from 'react';
import styles from './header.module.css'

function SiteHeader({title}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header className={styles.header}>
        <h1>{title}</h1>
      </header>
    </>
  );
}

export default SiteHeader
