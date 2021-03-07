
import Layout from '../components/templates/Layout';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getLaunchesAsync} from '../state/reducer/launches/launches.action';
import {Card} from '../components/atom'
import styles from '../styles/Home.module.css';

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
    <Layout title="SpaceX Launch Programs" >
      <ul>
          {launchList.map(launch => (
            <li key={launch.flight_number}>{launch.mission_name}</li>
          ))}
        </ul>
    </Layout>
  )
}
