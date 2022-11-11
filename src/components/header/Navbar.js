import React from 'react'

const Navbar = () => {
  return (
    <nav className="navigation navbar navbar-expand-lg ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                    <div className="mobail-menu">
                        <button type="button" className="navbar-toggler open-btn">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar first-angle"></span>
                            <span className="icon-bar middle-angle"></span>
                            <span className="icon-bar last-angle"></span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-6">
                    <div className="navbar-header">
                        <a className="navbar-brand logo" href="index.html"><img src="assets/images/sell/logo.png"
                                alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-10 col-md-1 col-1">
                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                        <button className="menu-close"><i className="ti-close"></i></button>
                        <ul className="nav  mb-2 mb-lg-0">
                            <li className="">
                                <a  href="/" className="menufont">HOME</a>
                                
                            </li>
                            <li className="menu-item-has-children">
                                <a href="/" className="menufont">BROWSE</a>
                                
                            </li>
                            <li className="menu-item-has-children">
                                <a href="/" className="menufont">AUCTIONS</a>
                             
                            </li>
                        <li className="menu-item-has-children">
                                <a href="/about-us" className="menufont">ABOUT US</a>
                                
                            </li>
                            <li className="menu-item-has-children">
                                <a href="/" className="menufont">FINANCING</a>
                                
                            </li>
                            <li><a href="/" className="menufont">CALENDAR</a></li>

                            <li>
                            
                              <button className="theme-btn1 btndef sellbtn1">SELL YOUR EQUIPMENT</button>  
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