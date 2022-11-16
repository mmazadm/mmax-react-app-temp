import React from 'react'
import Search from './Search'

const Topbar = () => {
  return (
    <div className='container-fluid bg-dark'>

        <ul className="nav flex-row-reverse py-2 px-4 align-items-center">
            <li className="ms-3">
                <Search/>
            </li>
            <li>
                <a href="/" className='menufont text-white ms-3'>Sign In</a>
            </li>
            <li>
                <a href="/" className='menufont text-white'>Register</a>
            </li>
        </ul>
    </div>
  )
}

export default Topbar