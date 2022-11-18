import React from 'react'
import d from '../assets/dictionary'
const MobileApp = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
        <div className="container-fluid">
            <div className="row">    
                <div className="col-md-2 mobildiv">
                    <img src="/assets/images/sell/Rectangle 144.svg" alt="presentational"  className="rectsec"/>
                </div>
                <div className="col col-lg-8">
                    <div className="container">    
                        <div className="row">
                            <h1 className="headerstrip">
                                <span dangerouslySetInnerHTML={{__html:d.mobile.mobileAppTitle}}></span>
                            </h1>
                            <h1 className="headstriptitle" >{d.mobile.introductionToApp}</h1>
                            <p  className="head1strippara">{d.mobile.featuresOfMobileApp}</p>
                        </div>
                        <center>
                            <img src="/assets/images/google-play 1.png" width="300px" alt="google play store"/>
                            <img src="/assets/images/download (5).png" alt="Apple app store"/>
                               <br/> <br/> <br/> <br/> <br/>
                        </center>
                        <div className="row">
                            <h1 className="head2mob">{d.mobile.tutorialTitle}</h1>
                            <p className="head3mob">{d.mobile.instructionToBrowseAllEvents}</p>
                        </div>
                    </div>
                    <div className="pt-5">
                    <div className="wpo-contact-form-area">
                        <div className="row ">
                            <div className="col-md-6 col-sm-12" >
                                <h1 className="mobhstyle">{d.mobile.eventDetailTitle}</h1>
                                <ul className="mobul">
                                    <li  className="mobli1">{d.mobile.eventDetails}</li>
                                    
                                     <li className="mobli2" >{d.mobile.eventDetails} </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <img src="/assets/images/1_home.png" alt="home" className="imgm"/>
                            </div>
                                <div className="col-md-3 col-sm-6" >
                                   <img src="/assets/images/2_browse_event.png" alt="event" className="imgm"/>
                                </div>
                        </div>
                    </div>
                    <div className="wpo-contact-form-area">
                        <div className="row ">
                            <div className="col-md-6 col-sm-12" >
                                <h1 className="mobhstyle">{d.mobile.eventDetailTitle}</h1>
                                <ul className="mobul">
                                    <li  className="mobli1">{d.mobile.eventDetails} </li>
                                    
                                     <li className="mobli2" >{d.mobile.eventDetails} </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <img src="/assets/images/1_home.png" alt="home" className="imgm"/>
                            </div>
                                <div className="col-md-3 col-sm-6" >
                                   <img src="/assets/images/2_browse_event.png" alt="event" className="imgm"/>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-2 mobildiv">
                    <img src="/assets/images/sell/Rectangle 143.svg" alt="presentational" className="rectbo"/>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default MobileApp