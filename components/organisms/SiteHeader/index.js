import Head from 'next/head';
import React from 'react'

function SiteHeader({title}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header>
        <h1>{title}</h1>
      </header>
    </>
  );
}

export default SiteHeader
