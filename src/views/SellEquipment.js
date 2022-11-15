import React, { useState } from 'react'

const SellEquipment = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    // const [purpose, setPurpose] = useState('')
    const [desc, setDesc] = useState('')
    // const [timeframe, setTimeframe] = useState('')
  return (
    <>    
    <section className="wpo-contact-pg-section section-padding">
        <div className="container-fluid">
            <div className="row">
                <h1 className="sellheadstyle">Sell Your Equipment</h1>
                <div className="sellstrip" >
                    <p className="sellstrippara" >
                        Ready to Maximize Your Asset Value?
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 mobildiv ps-0">
                    <img src="assets/images/Rectangle 14.svg" alt="presentational"/>
                </div>
                <div className="col-md-4 selimdiv" >
                    <div className="row sellequip">
                        <div className="col-md-6 selimbot" >
                            <img src="assets/images/sell/excavator-construction-site (1).png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="assets/images/sell/gear-metal-wheels-close-up.png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="assets/images/sell/excavator-site (1).png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="assets/images/sell/close-up-construction-site-excavator (1).png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="assets/images/sell/excavator-site.png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="assets/images/sell/cranes-seaport.png" alt="machine-1"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 sellform">                  
                    <p className="sellformpara">
                        Fill out the form on this page for a free confidential consultation.
                        One of our sales representatives will be in touch with you within 24 hours.
                        <br/><br/>
                    </p>
                    <form className="contact-validation-active sellform1" id="contact-form-main" novalidate="novalidate">
                        <div className="sellform">
                            <p className="formfont">First Name <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="firstname" id="firstname"
                            onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">Last Name <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="lastname" id="lastname"
                            onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">City <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="city" id="city"
                            onChange={(e) => setCity(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">State <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="state" id="state"
                            onChange={(e) => setState(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">Email <span className="orangestar" >*</span></p>
                            <input type="email" className="form-control" 
                            name="email" id="email"
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">Phone <span className="orangestar" >*</span></p>
                            <input type="tel" className="form-control" 
                            name="phone" id="phone"
                            onChange={(e) => setPhone(e.target.value)}/>
                        </div>    
                        <div className="row">   
                            <p className="formfont">I would like to discuss  <span className="orangestar" >*</span></p>
                            <div className="col-md-2">
                                <input type="radio" id="purpose" name="purpose" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">Selling my complete plant (Large plant)</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="purpose" name="purpose" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">Selling my complete facility (Small shop)</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="purpose" name="purpose" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">Selling my surplus equipment</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="purpose" name="purpose" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">Sending my equipment to the MachineryMax warehouse for auction</label>
                            </div>
                        </div>   
                        <div className="row">   
                            <p className="formfont">Timeframe  <span className="orangestar" >*</span></p>
                            <div className="col-md-2">
                                <input type="radio" id="timeframe" name="timeframe" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">Need it sold yesterday</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="timeframe" name="timeframe" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">2-4 weeks</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="timeframe" name="timeframe" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">Longer than 4 weeks</label>
                            </div>
                        </div>
                        <div className="fullwidth">
                            <p className="formfont">Describe your plant/surplus equipment <span className="orangestar" >*</span></p>
                            <textarea type="textarea" className="form-control" 
                            name="state" id="state"
                            onChange={(e) => setDesc(e.target.value)}/>
                        </div>
                        <div className="submit-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9">
                                        <p className="formnote">You can also contact us directly: <b>866-988-4667</b> <br/>
                                            Extension 1 <b>sales@machinerymax.com</b></p>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" className="theme-btn sellformbtn11">Send</button>
                                    </div>
                                </div>
                            </div> 
                            <div id="loader">
                                <i className="ti-reload"></i>
                            </div>
                        </div>
                        <div className="clearfix error-handling-messages">
                            <div id="success">Thank you</div>
                            <div id="error"> Error occurred while sending email. Please try again later. </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div  className="sellbdh">
                    <p className="sellbdp">
                        Maximize your assets with MachineryMax.Com <br/>
                        <span style={{"fontSize":"20px"}}> Reach over 255,000 immediate machinery buyers</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="wpo-contact-pg-section section-padding cardup" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-11 offset-lg-1">
                    <div className="row">
                        <div className="col-md-10 ">      
                        <div className="card mb-4">
                            <div className="row">
                                
                                   <div className="col-md-4 ">
                                   <img src="assets/images/sell/CompleteShop-v02.png" alt="completeShop" className="carduimg"/>
                                  
                                </div>
                                <div className="col-md-8 " >
                                    <br/> <br/>
                                    <div className="carduhead">
                                    <h1 className="cardustyle" >Have Machinery to Sell?<br/> Choose MachineryMax!</h1>
          
                                    <p>Founded in 2011, MachineryMax has proven to be the fastest growing online auction web site in America! Utilizing the latest and greatest technology and marketing techniques, MachineryMax will turn your sale into an event that buyers will engage in - resulting in a maximum return back to you! </p>
                                    
                                  </div>
                                    
                                
                                </div>
                            </div>
                        </div>
                              
                            </div>
                        </div>
                        
                        
                    <div className="row">
                       
                       <div className="col-md-10 ">     
                        <div className="card mb-4">
                            <div className="row">
                                
                                 
                                
                                
                                
                                
                                <div className="col-md-8" >
                                    <br/> <br/>
                                    <div className="carduhead">
                                    <h1 className="cardustyle">3 Tiered Sales Approach</h1>
          
                                    <p   >Commission: This is the most traditional auction structure and provides several different options to satisfy your needs. While there is some risk, it will provide the largest net reward. </p>
                                    
                                     <p  className="cardupara">Net Guarantee Approach: We will provide a guaranteed safety net minimum amount and will split a certain percentage above and beyond the minimum amount. This will provide the security of knowing what you will receive, with the opportunity to participate in upside potential earnings. </p>
                                     
                                   </div>  
                                </div>

                              
                              
                              
                                <div className="col-md-4 ">
                                   <img src="assets/images/sell/CompleteShop-v02.png" className="carduimg"/>
                                  
                                </div>
                              
                              
                              
                              
                              
                            </div>
                        </div>
                    </div>
                        </div>     
                       
                       <div className="row">
                       
                       <div className="col-md-10 ">
                          <div className="card mb-4">
                            <div className="row">
                                
                                   <div className="col-md-4 ">
                                   <img src="assets/images/sell/CompleteShop-v02.png"/>
                                  
                                </div>
                                
                                
                                
                                
                                <div className="col-md-8">
                                    <br/> <br/>
                                      <div className="carduhead">
                                    <h1 className="cardustyle">Complete Shop or Just a Few Machines</h1>
          
                                    <p  className="cardupara">MachineryMax has you covered! We have a very experienced team on staff which covers the United States and Canada to ensure quick deployment to any project that is presented to us. What sets us apart from other auction companies is that we put in the extra effort to clean and stage prior to our professional photographer shooting all of the pictures. In other words, we present our clients events in a 100% clean environment ensuring maximum value. We will also include video links of specific machines running which will inspire confidence in our buyers and ensure maximum return. </p>
                                    
                                  
                                     </div>
                                
                                </div>

                              
                            </div>
                        </div>  
                       
                       </div> 
                       
                          <div className="col-md-2 mobildiv">
                       <img src="assets/images/sell/arrow.png"/>
                         </div> 
                       
                       </div> 
                       
                        
                        
                    </div>
                  
                </div>
            </div>
            
            
            <div className="container">
                <div className="row">
                    
                                <h1 className="timehead">In a Time Crunch?</h1>
                                
                               <p  className="timepara" >  MachineryMax.Com can perform any size auction from start to <br/> finish in 4 weeks! </p>
       
                
                    <div className="container">
                          <div className="row" >
                              <div className="col-md-2"></div>
                       <div className="circle col-md-2" >Commission</div>
                       <div className=" col-md-2 mobildiv hrdiv" ><hr className="hrline"/>  </div>
                       <div className="circle col-md-2">Guarantee</div>
                         <div className=" col-md-2 mobildiv hrdiv" ><hr className="hrline"/></div>
                       <div className="circle col-md-2">Cash Purchase</div>
                       </div>
                     </div>
                
                <p  className="hrpara" >  We’ll offer a solution that best fits your needs and timeline </p>
                
                
                
                         
                
                
                
                 </div>  
            </div>  
            <div className="sellmsgstrip" >
                          <p className="sellparamsgstrip" >
                          Let the experts be your guide! <br/>
                          <span className="sellparatext" >Utilize our auction agents’ knowledge & expertise in providing you <br/> with the latest market values and machinery trends</span>
                            
                            </p>
                            
                           </div> 
            
       <div className="container"> 
        <br/>  <br/> <br/> 
       <div className="row">
          
           <h2 className="expertsell" >Expert Guidance</h2>
            <p   className="expertsellpara" >  Our team members include several years of industry experience and are capable of answering specific questions pertaining to individual machines, and assisting our clients on prescribing proper solutions for their specific applications. In other words we have extensive machinery and application knowledge and we work for our sellers behind the scenes providing necessary information about certain assets to guarantee interest and maximize results. </p>
        </div>
      
              <br/>  <br/> <br/>
           <div className="row rowgutter" >  
         
         <div className="col-md-6 offset-md-1 card"> 
         
         <img src="assets/images/sell/MachineryMaxOffices.png"/>
         
         
         </div>
            
            
            <div className="col-md-5" > 
            
             <h2 className="analytictext"><br/>7 Office Locations to Serve You</h2>
             <p  className="analytictextpara1" >  Our database includes over 100,000 buyers worldwide and our marketing efforts ensure that the “Who’s Who” knows about the event and engages.. </p>
            </div>
         </div>  
         
         
         
         
         
                       <br/>  <br/> <br/>
           <div className="row" >  
         
         <div className="col-md-4 offset-md-1"> 
         
         
          <h2 className="analytictext">Analytical Data</h2>
             <p className="analytictextpara2" >  In 2019 MachineryMax had 191,000 unique visitors to its web site, with 522,000 individual sessions. Our Global span reached an audience throughout the entire world. With this data, this ensures that our marketing techniques along with our database will realize maximum return for our sellers. </p>
         
         </div>
            
            
            <div className="col-md-7" > 
            
            
            <div className="card mb-4">
                            <div className="row">
                                
                                   <div className="col-md-6 ">
                                  <img src="assets/images/sell/AnalyticsUsers2019-v02.png" className="analyticimgcard1"/>
                                  
                                </div>
                                
                                
                                
                                
                                <div className="col-md-6" >
                                    <img src="assets/images/sell/SessionsByCountry.png" className="analyticimgcard2"/>
                                  
                                    
                                
                                </div>

                              
                            </div>
            </div>
            
            
            
            
            </div>
         </div> 
       </div>   
         
         

         
         <div className="container-fluid">
          <div className="row">
                    
             <h2 className="headingindust" >Industries We Serve</h2>
             
           <div className="col-md-2 mobildiv">
                        <img src="assets/images/sell/Rectangle 142.svg" className="cardfi"/>
                        </div>
             
             <div className="col-md-2">
                 
               <center>   <img src="assets/images/sell/building-contractor-worker-using-hand-held-worm-drive-circular-saw-cut-boards.png"/></center>
                 
                  <h2  className="industrytext">Woodworking</h2>
                  </div>
                                
                                
                    <div className="col-md-2">
                 
               <center>   <img src="assets/images/sell/close-up-construction-site-excavator.png"/> </center>
                 <h2  className="industrytext">Heavy Equipment</h2>
                 
                  </div>
                  
                  
                  
                               <div className="col-md-2">
                 
                <center> <img src="assets/images/sell/man-special-suit-polishing-metal-with-angle-grinder.png"/></center>
                 <h2  className="industrytext">Metalworking</h2>
                 
                  </div>
                  
                  
                  
                               <div className="col-md-2">
                 
             <center>     <img src="assets/images/sell/train-wagons-carrying-cargo-containers-shipping-companies.png"/> </center>
                 <h2  className="industrytext">Rolling Stock</h2>
                 
                  </div>
                                
                          <div className="col-md-2 mobildiv">
                        <img src="assets/images/sell/Rectangle 141.svg" className="cardli"/>
                        </div>                 
         </div> 
        </div>  
        </section>
    </>
  )
}

export default SellEquipment