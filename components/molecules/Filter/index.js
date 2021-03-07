import React from 'react'
import { Button } from '../../atom'

function Filter({title, keyName, values, handleClick}) {
  return (
    <div>
      <h6>{title}</h6>
      {values.map((value) => (
          <Button onClick={() => handleClick(keyName, value)}>{value}</Button>
      ))}
    </div>
  );
}

export default Filter
