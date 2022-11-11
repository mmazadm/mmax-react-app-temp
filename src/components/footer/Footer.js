import React from 'react'

const Footer = () => {
  return (
    <footer  className="wpo-site-footer footbg1" >
        <div className="wpo-support-section">
        </div>
        <div className="wpo-upper-footer" >
            <br/>  <br/>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <img src="assets/images/sell/mmlogo.png" alt="logo"/>
                            </div>

                            <ul>
                                <li>MachineryMax.Com</li>
                                <li>Call: +88 659 789 874</li>
                                <li><i className="ti-twitter"></i><i className="ti-facebook" ></i> <i className="ti-instagram"></i> </li>

                            </ul>
                        
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget  widget link-widget">
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                            <div className="widget-title"> 
                                <p>Useful Links:</p>
                            </div>
                            <ul>
                                <li ><a href="service-single.html"><i className="ti-angle-right"></i> Help Contact</a></li>
                                <li><a href="service-single.html"><i className="ti-angle-right"></i> Technical Support</a></li>
                                <li><a href="service-single.html"><i className="ti-angle-right"></i> About Us</a></li>
                                
                            
                            
                            </ul>
                        
                        </div>
                    </div>



                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget  widget link-widget">
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                            <div className="widget-title"> 
                                <p>Contact Us:</p>
                            </div>
                            <ul>
                                <li ><a href="service-single.html"><i className="ti-angle-right"></i> Terms and Conditions</a></li>
                                <li><a href="service-single.html"><i className="ti-angle-right"></i> Privacy Policy</a></li>
                                <li><a href="service-single.html"><i className="ti-angle-right"></i> Site Map</a></li>
                                
                            
                            
                            </ul>
                        
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget  contact-widget link-widget">
                        
                        
                            <h2 style={{"color": "white","margin-top": "30px;"}}>Subscribe to <br/> our Newsletter:</h2>



                            <form>
                                <div className="input-1">
                                    <input type="email" className="form-control" placeholder="Email" required="" style={{"width":"300px","border-radius": "20px","background-color": "transparent","border-color": "white"}}/>
                                </div>
                                <div className="submit clearfix">
                                    <button type="submit" style={{"background-color":"transparent"}}><i className="fa flaticon-send"
                                            aria-hidden="true" ></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg-6 col-12">
                        <p className="copyright"> </p>
                    </div>    
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer