import React from 'react'
import { NavLink } from 'react-router-dom'
import App from './App'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Click the links below to navigate our app.  </p>
      <section>
        <NavLink to ="/Users">User Page</NavLink>
        <NavLink to ="/PageNotFound">404Page</NavLink>
      </section>
    </div>
  )
}

export default Home;