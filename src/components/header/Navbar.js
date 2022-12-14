import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import d from '../../assets/dictionary'
import { url } from "../../assets/paths"

const menuItems = [
    {
        name:'HOME',
        link: url.home
    },
    {
        name:'Explore',
        submenu:[
          {
            name:'All',
            link: url.browse
          }
        ]
    },
    {
        name:'Auctions',
        link:url.auctions
    },
    {
        name:'About Us',
        submenu:[
            {
                name:'About Us',
                link:url.aboutUs
            },
            {
                name:'Mobile Applications',
                link:url.apps
            },
            {
                name:'Contact Us',
                link:url.contactUs
            }
        ]
    },
    {
        name:'Financing',
        link:url.financing
    },
    {
        name:'Calendar',
        link:url.calendar
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {categoriesWithCount} = useSelector(state => state.listings)
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
                                {menuItems.map((item, key) => {
                                    let hasChildren = 'submenu' in item
                                    return(
                                    <li key={key} className={hasChildren? "menu-item-has-children": ''}>
                                        <a href={item.link} className="menufont">
                                            {item.name.toUpperCase()}
                                        </a>
                                        {hasChildren &&
                                        <ul className="sub-menu">
                                            {item.submenu.map(i=> 
                                                <li key={i.link}>
                                                    <a href={i.link}>{i.name}</a>
                                                </li>
                                            )}
                                            {item.name.toUpperCase() === 'EXPLORE' &&
                                                categoriesWithCount.list &&
                                                categoriesWithCount.list.length>0 &&
                                                categoriesWithCount.list.map(cat => {
                                                    if(categoriesWithCount.counts[cat.id])
                                                    return(
                                                    <li key={cat.id}>
                                                        <a href={`/browse/${cat.id}`}
                                                        className="d-flex justify-content-between align-items-center">
                                                            <span>{cat.name}</span>
                                                            <span className="badge rounded-pill bg-secondary text-center">
                                                                {categoriesWithCount.counts[cat.id]}
                                                            </span>
                                                        </a>
                                                    </li>)
                                                    else return null
                                                })}
                                        </ul>
                                        }
                                    </li>
                                    )
                                })}
                                <li key={0}>
                                    <a className="theme-btn1 btndef sellbtn1"
                                        href={url.sellEquipment}>
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