import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import d from '../../assets/dictionary'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {categories} = useSelector(state => state.listings)
    return (
        <nav className="navigation navbar navbar-expand-lg ">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-3 d-lg-none d-block">
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
                                <img src="/assets/images/sell/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-1 col-1">
                        <div id="navbar" className={`collapse navbar-collapse navigation-holder ${isOpen? 'slideInn':''}`}>
                            <button className="menu-close" onClick={() => setIsOpen(false)}><i className="ti-close"></i></button>
                            <ul className="nav mb-2 mb-lg-0">
                                {d.menuItems.map((item, key) => {
                                    let hasChildren = 'submenu' in item
                                    return(
                                    <li key={key} className={hasChildren? "menu-item-has-children": ''}>
                                        <a href={item.link} className="menufont">
                                            {item.name.toUpperCase()}
                                        </a>
                                        {hasChildren && 
                                        <ul className="sub-menu">
                                            {item.submenu.map(i=> 
                                                <li>
                                                    <a href={i.link}>{i.name}</a>
                                                </li>
                                            )}
                                            {item.name.toUpperCase() === 'BROWSE' &&
                                                categories.map(cat =>
                                                    <li>
                                                        <a href={`/browse/${cat.ID}`}>{cat.Name}</a>
                                                    </li>
                                            )}
                                        </ul>
                                        }
                                    </li>
                                    )
                                })}
                                <li>
                                    <a className="theme-btn1 btndef sellbtn1"
                                        href='/sell-your-equipment'>
                                           {d.navbar.sellBtn}
                                    </a>  
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