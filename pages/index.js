
import {useEffect,useRef, useState} from 'react';
import baseUrl from '../api/url';

import Layout from '../components/templates/Layout';
import {Card} from '../components/atom'
import { SiteSidebar } from '../components/organisms';
import styles from '../styles/Home.module.css';
import {filterConfig} from '../config/launchFilter.config';
import { Filter } from '../components';

import { useRouter } from 'next/router'

export default function Home({data}) {
  const firstRun = useRef(true)
  const [renderCount, setRenderCount] = useState(0)
  const router = useRouter()
  const [params, setParams] = useState({
    limit: 100,
    launch_year: '',
    launch_success: '',
    land_success: '',
  });
  const [paginatedIndex, setPaginatedIndex] = useState(1);

  /* Handle Toggle on Filter click */
  const handleFilterClick = (key, value) => {
    setPaginatedIndex(10)
    // console.log(key, value);
    if(params[key] === value){
      setParams(params => ({
        ...params,
        [key]: ''
      }))
    }else{
      setParams(params => ({
        ...params,
        [key]: value
      }))
    }
  }

  /* Chage url based on filter */
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    router.push({
      pathname: '/',
      search: new URLSearchParams(params)
    })
  }, [params])

  /* Handle Refresh with query param */
  useEffect(() => {
    if(Object.keys(router.query).length > 0){
        if (renderCount === 0) {
          // console.log(router.query);
          setParams({ ...router.query });
          setRenderCount(1);
        }
    }
  }, [data, params, router])

   useEffect(() => {
   const onScroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("you're at the bottom of the page")
        setPaginatedIndex(index => index<10? index+1 : index )
      }
   }
   window.addEventListener('scroll', onScroll)
   return () => window.removeEventListener('scroll', onScroll)
}, [])

  const filteredList = data.slice(0,paginatedIndex*12)
  .filter(launch => !params.launch_year ? ( launch.launch_year !== '') : (launch.launch_year == params.launch_year))
  .filter(launch => (params.launch_success === undefined ||  params.launch_success === '') ? ( launch.launch_success !== '') : (launch.launch_success?.toString() === params.launch_success))
  .filter(launch => (params.land_success === undefined || params.land_success === '')  ? ( launch?.rocket?.first_stage?.cores[0]?.land_success !== '') : (launch?.rocket?.first_stage?.cores[0]?.land_success?.toString() === params.land_success));

  return (
    <Layout title="SpaceX Launch Programs" >
      <div>
        <SiteSidebar>
          <h3 className={styles.sidebarTitle}>Filters</h3>
          {
            filterConfig(2006).map(filter => <Filter key={filter.key} title={filter.title} keyName={filter.key} values={filter.values} handleClick={handleFilterClick} activeFilter={params}/>)
          }
        </SiteSidebar>
      </div>
      <div className={styles.cardContainer}>
        {
          filteredList.length > 0 ? filteredList.map(launch => (
            <Card 
              key={`${launch.mission_name}${launch.flight_number}`}
              imgUrl={launch?.links?.mission_patch_small || 'https://via.placeholder.com/150x150?text=No%20Image%20Available'}
              title={`${launch.mission_name} #${launch.flight_number}`}
              missionIdList={launch.mission_id}
              launchYear={launch.launch_year}
              launchSucccess={launch.launch_success ? "true" : "false"}
              landSuccess={launch?.rocket?.first_stage?.cores[0]?.land_success !== null ? launch?.rocket?.first_stage?.cores[0]?.land_success.toString() : "Not Available"}
            />
          )) : <h4>{renderCount === 0 ? "Loading..." : "No Records Found..."}</h4>
        }
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(baseUrl.getLaunchList)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
