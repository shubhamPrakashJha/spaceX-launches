
import Layout from '../components/templates/Layout';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getLaunchesAsync} from '../state/reducer/launches/launches.action';
import {Card} from '../components/atom'
import { SiteSidebar } from '../components/organisms';
import styles from '../styles/Home.module.css';
import {filterConfig} from '../config/launchFilter.config';
import { Filter } from '../components';

export default function Home() {
  const dispatch = useDispatch();
  const {
    launchList
  } = useSelector(state => state.launchState) 

  useEffect(() => {
    dispatch(getLaunchesAsync({params: {limit: 100}}))
  }, [])

  const handleFilterClick = (key, value) => {
    console.log(key, value)
  }

  return (
    <Layout title="SpaceX Launch Programs" >
      <div>
        <SiteSidebar>
          {
            filterConfig(2006).map(filter => <Filter title={filter.title} keyName={filter.key} values={filter.values} handleClick={handleFilterClick} />)
          }
        </SiteSidebar>
      </div>
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
