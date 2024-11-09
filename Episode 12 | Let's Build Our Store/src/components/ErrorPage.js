import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const err= useRouteError();
    console.log(err);
  return (
    <div>
      <h1>Oops!!!!</h1>
      <h2>Something went wrong</h2>
      <span>{err.error.message} </span>
      <span>{err.status}: {err.statusText} </span>
    </div>
  )
}

export default ErrorPage
