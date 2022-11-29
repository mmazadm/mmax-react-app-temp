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
    <div className='container-fluid search-wrap bg-dark'>
        <div className="row align-items-center">
            <div className="signform"> 
                { authenticated?
                    <span className="copyright cp_st">
                        <Link to={url.accountSummary} className="menufont text-white ms-3">
                            {d.topBar.myaccount} | 
                        </Link>
                        <button onClick={()=>dispatch(logout(navigate, pathname))} className="menufont text-white">
                            Logout
                        </button>
                    </span> 
                    :
                    <span className="copyright cp_st">
                        <Link to={url.signIn} className='menufont text-white ms-3'>{d.topBar.signin} | </Link>
                        <Link to={url.register} className='menufont text-white'>{d.topBar.regitration}</Link>
                    </span>
                }
                <div class="form-group has-search me-3">
                    <Search/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar