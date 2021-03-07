import React from 'react';
import styles from './card.module.css'


function Card({imgUrl="", title, missionIdList = [], launchYear="", launchSucccess=false, landSuccess=false}) {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={imgUrl} alt="mission patch"/>
      </div> 
      <div className={styles.card_body}>
        <h4 className={styles.card_title}>{title}</h4>
        <h5>Mission Ids:</h5>
          <ul className={styles.list}>
            {missionIdList.map(missionId => <li>{missionId}</li>)}
          </ul>
        <h5>Launch Year: <span className={styles.card_value}>{launchYear}</span></h5> 
        <h5>Successful Launch: <span className={styles.card_value}>{launchSucccess}</span></h5> 
        <h5>Successful landing: <span className={styles.card_value}>{landSuccess}</span></h5>
      </div>
    </div>
  )
}

export default Card
