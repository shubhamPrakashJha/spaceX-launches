import Head from 'next/head'
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getLaunchesAsync} from '../state/reducer/launches/launches.action'
import styles from '../styles/Home.module.css'

export default function Home() {
  const dispatch = useDispatch();
  const {
    launchList
  } = useSelector(state => state.launchState) 

  useEffect(() => {
    // console.log('hello')
    // dispatch(getLaunchesAsync({params: {launch_year: 2014}}))
    dispatch(getLaunchesAsync({params: {limit: 100}}))
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Launch Programs</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header>
        <h1 className={styles.title}>
          SpaceX Launch Programs
        </h1>
      </header>
      <main className={styles.main}>
        <ul>
          {launchList.map(launch => (
            <li key={launch.flight_number}>{launch.mission_name}</li>
          ))}
        </ul>
        
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by:{' '}
          Shubham Prakash
        </a>
      </footer>
    </div>
  )
}
