import React from 'react'
import Nav from './partials/Nav'
import Pageone from './pages/Pageone'
import Pagetwo from './pages/Pagetwo'
import Pagethree from './pages/Pagethree'
import Pagefour from './pages/Pagefour'
import Pagefive from './pages/Pagefive'

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <Pageone/> 
      <Pagetwo/>
      <Pagethree/>
      <Pagefour/>
      <Pagefive/>
    </>
  )
}

export default Home
