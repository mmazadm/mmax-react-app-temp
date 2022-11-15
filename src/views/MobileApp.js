import React from 'react'
import d from '../assets/dictionary'
const MobileApp = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
        <div className="container-fluid">
            <div className="row">    
                <div className="col-md-2 mobildiv">
                    <img src="assets/images/sell/Rectangle 144.svg" alt="presentational"  className="rectsec"/>
                </div>
                <div className="col col-lg-8">
                    <div className="container">    
                        <div class="row">
                            <h1 class="headerstrip">
                                <span dangerouslySetInnerHTML={{__html:d.mobile.mobileAppTitle}}></span>
                                {/* MachineryMax Mobile <br/>Application */}
                                </h1>
                            <h1 class="headstriptitle" >{d.mobile.introductionToApp}</h1>
                            <p  class="head1strippara">{d.mobile.featuresOfMobileApp}</p>
                        </div>
                        <center>
                            <img src="assets/images/google-play 1.png" width="300px" alt="google play store"/>
                            <img src="assets/images/download (5).png" alt="Apple app store"/>
                               <br/> <br/> <br/> <br/> <br/>
                        </center>
                        <div class="row">
                            <h1 class="head2mob">{d.mobile.tutorialTitle}</h1>
                            <p class="head3mob">{d.mobile.instructionToBrowseAllEvents}</p>
                        </div>
                    </div>
                    <div className="pt-5">
                    <div class="wpo-contact-form-area">
                        <div class="row ">
                            <div class="col-md-6 col-sm-12" >
                                <h1 class="mobhstyle">{d.mobile.eventDetailTitle}</h1>
                                <ul class="mobul">
                                    <li  class="mobli1">{d.mobile.eventDetails} </li>
                                    
                                     <li class="mobli2">{d.mobile.eventDetails}</li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <img src="assets/images/1_home.png" alt="home" class="imgm"/>
                            </div>
                                <div class="col-md-3 col-sm-6" >
                                   <img src="assets/images/2_browse_event.png" alt="event" class="imgm"/>
                                </div>
                        </div>
                    </div>
                    <div class="wpo-contact-form-area">
                        <div class="row ">
                            <div class="col-md-6 col-sm-12" >
                                <h1 class="mobhstyle">{d.mobile.eventDetailTitle}</h1>
                                <ul class="mobul">
                                    <li  class="mobli1">{d.mobile.eventDetails}</li>
                                    
                                     <li class="mobli2" > {d.mobile.eventDetails}</li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <img src="assets/images/1_home.png" alt="home" class="imgm"/>
                            </div>
                                <div class="col-md-3 col-sm-6" >
                                   <img src="assets/images/2_browse_event.png" alt="event" class="imgm"/>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-2 mobildiv">
                    <img src="assets/images/sell/Rectangle 143.svg" alt="presentational" className="rectbo"/>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default MobileApp