import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>OOPS</h1>
      <h3>Something went wrong</h3>
      <h4>{err.status} : {err.statusText}</h4>
    </div>
  )
}

export default Error
