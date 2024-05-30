import React from 'react'
import { useRouteError } from 'react-router-dom';

interface RouteError {
  status?: number;
  statusText?: string;
  data?: string;
}

function Error() {
  const error = useRouteError() as RouteError;
  
  return (
    <div>
      <h1>{error.status} {error.statusText}</h1>
      <p>{error.data}</p>
    </div>
  )
}

export default Error