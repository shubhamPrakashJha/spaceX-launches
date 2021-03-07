import React from 'react'
import { Button } from '../../atom'
import styles from './filter.module.css'

function Filter({title, keyName, values, handleClick, activeFilter}) {
  return (
    <>
      <div className={styles.filterTitle}>
        <h4>{title}</h4>
        <hr className={styles.line} />
      </div>
      <div className={styles.filterValuesWrapper}>
        {values.map((value) => (
          <Button key={value} onClick={() => handleClick(keyName, value)} active={activeFilter[keyName] === value}>{value}</Button>
        ))}
      </div>
    </>
  );
}

export default Filter
