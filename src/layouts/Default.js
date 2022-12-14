import React from 'react'
import { useOutlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
//import Tickr from '../components/header/Tickr'
import Topbar from '../components/header/Topbar'

const Default = () => {
  //const {pathname} = useLocation()
  return (
    <div className="page-wrapper">
      <header id="header" className="mheader" >
        <Topbar/>
        {/*pathname === '/' && <Tickr/>*/}
        <div className="wpo-site-header wpo-header-style-2 headmobbg" >
          <Navbar/>
        </div>
      </header>
      {useOutlet()}
      <Footer/>
    </div>
  )
}

export default Default