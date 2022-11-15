import React, { useState } from 'react'
import d from '../assets/dictionary'
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
                <h1 className="sellheadstyle">{d.sellEquipment.sellEquipmentTitle}</h1>
                <div className="sellstrip" >
                    <p className="sellstrippara" >
                       {d.sellEquipment.assetValueTitle}
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 mobildiv ps-0">
                    <img src="assets/images/Rectangle 14.svg" alt="presentational"/>
                </div>
                <div className="col-md-4 selimdiv" >
                    <div class="row sellequip">
                        <div class="col-md-6 selimbot" >
                            <img src="assets/images/sell/excavator-construction-site (1).png" alt="machine-1"/>
                        </div>
                        <div class="col-md-6 selimbot" >
                            <img src="assets/images/sell/gear-metal-wheels-close-up.png" alt="machine-1"/>
                        </div>
                        <div class="col-md-6 selimbot" >
                            <img src="assets/images/sell/excavator-site (1).png" alt="machine-1"/>
                        </div>
                        <div class="col-md-6 selimbot" >
                            <img src="assets/images/sell/close-up-construction-site-excavator (1).png" alt="machine-1"/>
                        </div>
                        <div class="col-md-6 selimbot" >
                            <img src="assets/images/sell/excavator-site.png" alt="machine-1"/>
                        </div>
                        <div class="col-md-6 selimbot" >
                            <img src="assets/images/sell/cranes-seaport.png" alt="machine-1"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 sellform">                  
                    <p className="sellformpara">
                        {d.sellEquipment.consultationFormDescription}
                        <br/><br/>
                    </p>
                    <form className="contact-validation-active sellform1" id="contact-form-main" novalidate="novalidate">
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.firstName}<span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="firstname" id="firstname"
                            onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.lastName} <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="lastname" id="lastname"
                            onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.city} <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="city" id="city"
                            onChange={(e) => setCity(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.state} <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="state" id="state"
                            onChange={(e) => setState(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.email} <span className="orangestar" >*</span></p>
                            <input type="email" className="form-control" 
                            name="email" id="email"
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.phoneNo} <span className="orangestar" >*</span></p>
                            <input type="tel" className="form-control" 
                            name="phone" id="phone"
                            onChange={(e) => setPhone(e.target.value)}/>
                        </div>    
                        <div className="row">   
                            <p className="formfont">{d.sellEquipment.discussionTitle} <span className="orangestar" >*</span></p>
                            <div className="col-md-2">
                                <input type="radio" id="purpose" name="purpose" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">{d.sellEquipment.sellingOption1}</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="purpose" name="purpose" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">{d.sellEquipment.sellingOption2}</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="purpose" name="purpose" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">{d.sellEquipment.sellingOption3}</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="purpose" name="purpose" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">{d.sellEquipment.sellingOption4}</label>
                            </div>
                        </div>   
                        <div className="row">   
                            <p className="formfont">{d.sellEquipment.timeframeTitle}  <span className="orangestar" >*</span></p>
                            <div className="col-md-2">
                                <input type="radio" id="timeframe" name="timeframe" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">{d.sellEquipment.timeframeOption1}</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="timeframe" name="timeframe" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">{d.sellEquipment.timeframeOption2}</label>
                            </div>

                            <div className="col-md-2">
                                <input type="radio" id="timeframe" name="timeframe" value="HTML" className="radiowidth"/>
                            </div>
                            <div className="col-md-10">
                                <label for="html"  className="formfont1">{d.sellEquipment.timeframeOption3}</label>
                            </div>
                        </div>
                        <div className="fullwidth">
                            <p className="formfont">{d.sellEquipment.describePlantTitle} <span className="orangestar" >*</span></p>
                            <textarea type="textarea" className="form-control" 
                            name="state" id="state"
                            onChange={(e) => setDesc(e.target.value)}/>
                        </div>
                        <div className="submit-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9">
                                        <p className="formnote">
                                            <span dangerouslySetInnerHTML={{__html:d.sellEquipment.contactDetails}}></span>
                                            </p>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" className="theme-btn sellformbtn11">{d.sellEquipment.sendBtn}</button>
                                    </div>
                                </div>
                            </div> 
                            <div id="loader">
                                <i className="ti-reload"></i>
                            </div>
                        </div>
                        <div className="clearfix error-handling-messages">
                            <div id="success">{d.sellEquipment.submitSucced} </div>
                            <div id="error"> {d.sellEquipment.submitFailed} </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div  class="sellbdh">
                    <p class="sellbdp">
                        {d.sellEquipment.maximizeAssetMessageStrip1}<br/>
                        <span style={{"fontSize":"20px"}}>{d.sellEquipment.maximizeAssetMessageStrip2}</span>
                        {/* Maximize your assets with MachineryMax.Com <br/>
                        <span style={{"fontSize":"20px"}}> Reach over 255,000 immediate machinery buyers</span> */}
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
                                    <h1 className="cardustyle" > <span dangerouslySetInnerHTML={{__html:d.sellEquipment.chooseMachineryMaxTitle}}></span></h1>
          
                                    <p>{d.sellEquipment.chooseMachineryMaxDescription}</p>
                                    
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
                                    <h1 className="cardustyle">{d.sellEquipment.threeTiredSalesTitle}</h1>
          
                                    <p   >{d.sellEquipment.commisionDescription} </p>
                                    
                                     <p  className="cardupara">{d.sellEquipment.netApproach} </p>
                                     
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
                                    <h1 className="cardustyle">{d.sellEquipment.completeShopTitle}</h1>
          
                                    <p  className="cardupara">{d.sellEquipment.completeShopDescription} </p>
                                    
                                  
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
                    
                                <h1 className="timehead">{d.sellEquipment.timeCrunchTitle}</h1>
                                
                               <p  className="timepara" >  
                               <span dangerouslySetInnerHTML={{__html:d.sellEquipment.timeCrunchDescription}}></span>
                               </p>
       
                
                    <div className="container">
                          <div className="row" >
                              <div className="col-md-2"></div>
                       <div className="circle col-md-2" >{d.sellEquipment.commision}</div>
                       <div className=" col-md-2 mobildiv hrdiv" ><hr className="hrline"/>  </div>
                       <div className="circle col-md-2">{d.sellEquipment.guarantee}</div>
                         <div className=" col-md-2 mobildiv hrdiv" ><hr className="hrline"/></div>
                       <div className="circle col-md-2">{d.sellEquipment.cashPurchase}</div>
                       </div>
                     </div>
                
                <p  className="hrpara" >  {d.sellEquipment.solution} </p>
                
                
                
                         
                
                
                
                 </div>  
            </div>  
            <div className="sellmsgstrip" >
                          <p className="sellparamsgstrip" >
                          {d.sellEquipment.sellMessageStrip1} <br/>
                          <span className="sellparatext" >
                            <span dangerouslySetInnerHTML={{__html:d.sellEquipment.sellMessageStrip2}}></span>
                            </span>
                            
                            </p>
                            
                           </div> 
            
       <div className="container"> 
        <br/>  <br/> <br/> 
       <div className="row">
          
           <h2 className="expertsell" >{d.sellEquipment.expertGuidance}</h2>
            <p   className="expertsellpara" > {d.sellEquipment.expertGuidanceDescription}</p>
        </div>
      
              <br/>  <br/> <br/>
           <div className="row rowgutter" >  
         
         <div className="col-md-6 offset-md-1 card"> 
         
         <img src="assets/images/sell/MachineryMaxOffices.png"/>
         
         
         </div>
            
            
            <div className="col-md-5" > 
            
             <h2 className="analytictext"><br/>{d.sellEquipment.officeLocations}</h2>
             <p  className="analytictextpara1" > {d.sellEquipment.officeLocationsDescription} </p>
            </div>
         </div>  
         
         
         
         
         
                       <br/>  <br/> <br/>
           <div className="row" >  
         
         <div className="col-md-4 offset-md-1"> 
         
         
          <h2 className="analytictext">{d.sellEquipment.analyticalData}</h2>
             <p className="analytictextpara2" > {d.sellEquipment.analyticalDataDescription} </p>
         
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
                    
             <h2 className="headingindust" >{d.sellEquipment.industriesWeServe}</h2>
             
           <div className="col-md-2 mobildiv">
                        <img src="assets/images/sell/Rectangle 142.svg" className="cardfi"/>
                        </div>
             
             <div className="col-md-2">
                 
               <center>   <img src="assets/images/sell/building-contractor-worker-using-hand-held-worm-drive-circular-saw-cut-boards.png"/></center>
                 
                  <h2  className="industrytext">{d.sellEquipment.woodWorkingIndustry}</h2>
                  </div>
                                
                                
                    <div className="col-md-2">
                 
               <center>   <img src="assets/images/sell/close-up-construction-site-excavator.png"/> </center>
                 <h2  className="industrytext">{d.sellEquipment.heavyEquipmentIndustry}</h2>
                 
                  </div>
                  
                  
                  
                               <div className="col-md-2">
                 
                <center> <img src="assets/images/sell/man-special-suit-polishing-metal-with-angle-grinder.png"/></center>
                 <h2  className="industrytext">{d.sellEquipment.metalWorkingIndustry}</h2>
                 
                  </div>
                  
                  
                  
                               <div className="col-md-2">
                 
             <center>     <img src="assets/images/sell/train-wagons-carrying-cargo-containers-shipping-companies.png"/> </center>
                 <h2  className="industrytext">{d.sellEquipment.rollingStockIndustry}</h2>
                 
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