import React from 'react'
import d from '../../assets/dictionary'
import Search from './Search'

const Topbar = () => {
  return (
    <div className='container-fluid bg-dark'>

        <ul className="nav flex-row-reverse py-2 px-4 align-items-center">
            <li className="ms-3">
                <Search/>
            </li>
            <li>
                <a href="/signIn" className='menufont text-white ms-3'>{d.topBar.signin}</a>
            </li>
            <li>
                <a href="/register" className='menufont text-white'>{d.topBar.regitration}</a>
            </li>
        </ul>
    </div>
  )
}

export default Topbar