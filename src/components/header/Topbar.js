import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import d from '../../assets/dictionary'
import Search from './Search'
import { url } from '../../assets/paths'
import { logout } from '../../store/userSlice'

const Topbar = () => {
    const { authenticated } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {pathname} = useLocation()
  return (
    <div className='container-fluid bg-dark'>

        <ul className="nav flex-row-reverse py-1 px-4 align-items-center">
            <li className="ms-3">
                <Search/>
            </li>
            { authenticated?
            <>
                <li>
                    <Link to={url.accountSummary} className="menufont text-white ms-3">
                        {d.topBar.myaccount}
                    </Link>
                </li>
                <li>
                    <button onClick={()=>dispatch(logout(navigate, pathname))} className="menufont">
                        Logout
                    </button>
                </li>
            </>:
            <>
            <li>
                <Link to={url.signIn} className='menufont text-white ms-3'>{d.topBar.signin}</Link>
            </li>
            <li>
                <Link to={url.register} className='menufont text-white'>{d.topBar.regitration}</Link>
            </li>
            </>
            }
        </ul>
    </div>
  )
}

export default Topbar