import React from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../components/common/Loader'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import Topbar from '../components/header/Topbar'

const Default = () => {
  return (
    <div className="page-wrapper">
      <Loader/>
      <header id="header" className="mheader" >
        <Topbar/>
        <div className="wpo-site-header wpo-header-style-2 headmobbg" >
          <Navbar/>
        </div>
      </header>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Default