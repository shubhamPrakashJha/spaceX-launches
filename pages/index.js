
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
      <div>
        {
          launchList.map(launch => (
            <Card 
              imgUrl={launch?.links?.mission_patch_small || 'https://via.placeholder.com/150x150?text=No%20Image%20Available'}
              title={`${launch.mission_name} #${launch.flight_number}`}
              missionIdList={launch.mission_id}
              launchYear={launch.launch_year}
              launchSucccess={launch.launch_success ? "true" : "false"}
              landSuccess={launch?.rocket?.first_stage?.cores[0]?.land_success ? "true" : "false"}
            />
          ))
        }
      </div>
    </Layout>
  )
}
