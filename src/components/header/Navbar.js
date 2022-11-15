import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import d from '../../assets/dictionary'

const Navbar = () => {
    const menuItems = [
        {
            name:'HOME',
            link:'/'
        },
        {
            name:'Browse',
            link:'/'
        },
        {
            name:'Auctions',
            link:'/'
        },
        {
            name:'About Us',
            link:'/about-us'
        },
        {
            name:'Financing',
            link:'/financing'
        },
        {
            name:'Calendar',
            link:'/'
        }
    ]
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <nav className="navigation navbar navbar-expand-lg ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                        <div className="mobail-menu">
                            <button type="button" onClick={()=>setIsOpen(!isOpen)} className={`navbar-toggler ${isOpen? 'x-close': 'open-btn'}`}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar first-angle"></span>
                                <span className="icon-bar middle-angle"></span>
                                <span className="icon-bar last-angle"></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="navbar-header">
                            <a className="navbar-brand logo" href="index.html">
                                <img src="assets/images/sell/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-1 col-1">
                        <div id="navbar" className={`collapse navbar-collapse navigation-holder ${isOpen? 'slideInn':''}`}>
                            <button className="menu-close" onClick={() => setIsOpen(false)}><i className="ti-close"></i></button>
                            <ul className="nav mb-2 mb-lg-0">
                                {menuItems.map((item, key) => {
                                    let hasChildren = 'submenu' in item
                                    return(
                                    <li key={key} className={hasChildren? "menu-item-has-children": ''}>
                                        <a href={item.link} className="menufont">
                                            {item.name.toUpperCase()}
                                        </a>
                                    </li>
                                    )
                                })}
                                <li>
                                    <button className="theme-btn1 btndef sellbtn1"
                                        onClick={() => navigate('/sell-your-equipment')}>
                                           {d.navbar.sellBtn}
                                    </button>  
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar