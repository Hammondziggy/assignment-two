import React from 'react'

const PageNotFound = () => {
  return (
    <section className ="error">
      <h2>404</h2>
      <p>Sorry! Page not found.</p>
      <p>Check in with your network provider or review connection issues from your end.
      <NavLink to ="/">Go Back Home</NavLink> 
      </p>
  </section>   
  );  
}

export default PageNotFound;