import React, { useState } from 'react'
import d from '../assets/dictionary'
// import axios from 'axios'

const SellEquipment = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [purpose, setPurpose] = useState('')
    const [desc, setDesc] = useState('')
    const [timeframe, setTimeframe] = useState('')
    const [response, setResponse] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        let sellEquipment = {
            "FirstName":firstname,
            "LastName":lastname,
            "City":city,
            "State":state,
            "Email":email,
            "Phone":phone,
            "Discussion":purpose,
            "TimeFrame":timeframe,
            "Description":desc
        }
        console.log(sellEquipment)
        setResponse(1)
        /*axios.post('/api/user/sellequipment', sellEquipment)
        .then(()=> setResponse(1))
        .catch(()=> setResponse(2))*/
    }
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
                    <img src="/assets/images/Rectangle 14.svg" alt="presentational"/>
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
                        {d.sellEquipment.consultationFormDescription}
                    </p>
                    <form className="contact-validation-active sellform1" 
                    id="contact-form-main" 
                    noValidate>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.firstName}<span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="firstname" id="firstname" value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.lastName} <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="lastname" id="lastname" value={lastname}
                            onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.city} <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="city" id="city"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.state} <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="state" id="state"
                            onChange={(e) => setState(e.target.value)}
                            value={state}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.email} <span className="orangestar" >*</span></p>
                            <input type="email" className="form-control" 
                            name="email" id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}/>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.phoneNo} <span className="orangestar" >*</span></p>
                            <input type="tel" className="form-control" 
                            name="phone" id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}/>
                        </div>    
                        <div className="row">   
                            <p className="formfont">{d.sellEquipment.discussionTitle} <span className="orangestar" >*</span></p>
                            {d.sellEquipment.sellingPurpose.map(item=> (
                                <>
                                <div className="col-md-2">
                                    <input type="radio" id="purpose" name="purpose" 
                                    value={item}
                                    className="radiowidth"
                                    onChange={()=> setPurpose(item)}/>
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="html"  className="formfont1">{item}</label>
                                </div>
                                </>
                            ))}

                        </div>   
                        <div className="row">   
                            <p className="formfont">{d.sellEquipment.timeframeTitle}  <span className="orangestar" >*</span></p>
                            {d.sellEquipment.timeframeOptions.map(item=>(
                                <>
                                    <div className="col-md-2">
                                        <input type="radio" id="timeframe" name="timeframe" 
                                        value={item} 
                                        className="radiowidth"
                                        onChange={() => setTimeframe(item) }/>
                                    </div>
                                    <div className="col-md-10">
                                        <label htmlFor="html"  className="formfont1">{item}</label>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="fullwidth">
                            <span className="formfont">
                                {d.sellEquipment.describePlantTitle1}
                                </span>
                                <p style={{fontFamily: "Montserrat" , fontSize:'14px'}}>
                                    {d.sellEquipment.describePlantTitle2}
                                <span className="orangestar" >*</span></p>
                            <textarea type="textarea" className="form-control" 
                            name="state" id="state"
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}/>
                        </div>
                        <div className="submit-area">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-9">
                                        <p className="formnote p-2 mb-0">
                                            <span dangerouslySetInnerHTML={{__html:d.sellEquipment.contactDetails}}></span>
                                            </p>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" 
                                        className="theme-btn sellformbtn11"
                                        onClick={(e)=>onSubmit(e)}>
                                            {d.sellEquipment.sendBtn}
                                        </button>
                                    </div>
                                </div>
                            </div> 
                            <div id="loader">
                                <i className="ti-reload"></i>
                            </div>
                        </div>
                        <div className="clearfix error-handling-messages">
                            {response === 1 && <div id="success">{d.sellEquipment.submitSucced} </div>}
                            {response === 2 && <div id="error"> {d.sellEquipment.submitFailed} </div>}
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="sellbdh">
                    <p className="sellbdp">
                        {d.sellEquipment.maximizeAssetMessageStrip1} <br/>
                        <span style={{"fontSize":"20px"}}> <span  dangerouslySetInnerHTML={{__html:d.sellEquipment.maximizeAssetMessageStrip2}}></span></span>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="wpo-contact-pg-section section-padding cardup" >
        <div className="container">   
            <div className="card mb-5">
                <div className="row"> 
                    <div className="col-3">                       
                        <img src="assets/images/sell/CompleteShop-v02.png" alt="completeShop"
                        className="card-img"/>
                    </div>
                    <div className="col-9" >
                        <div className="card-body">
                        <h4 className="card-title pt-4" > {d.sellEquipment.chooseMachineryMaxTitle}</h4>
                        <div className="card-text">
                            <p> 
                                <span dangerouslySetInnerHTML={{__html:d.sellEquipment.chooseMachineryMaxDescription}}></span>
                                </p>                                
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-5">
                <div className="row"> 
                    <div className="col-9" >
                        <div className="card-body">
                            <h4 className="card-title pt-4">{d.sellEquipment.threeTiredSalesTitle}</h4>
                            <div className="card-text">
                                <p>{d.sellEquipment.commisionDescription}</p>
                                <p>
                                    <span dangerouslySetInnerHTML={{__html:d.sellEquipment.netApproach}}></span>
                                    </p>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-3">                       
                        <img src="assets/images/sell/CompleteShop-v02.png" alt="completeShop"
                        className="card-img"/>
                    </div>
                </div>
            </div>
            <div className="card mb-5">
                <div className="row"> 
                    <div className="col-3">                       
                        <img src="assets/images/sell/CompleteShop-v02.png" alt="completeShop"
                        className="card-img"/>
                    </div>
                    <div className="col-9">
                        <div className="card-body">
                        <h4 className="card-title pt-4" >{d.sellEquipment.completeShopTitle}</h4>
                        <div className="card-text">
                            <p>
                                <span dangerouslySetInnerHTML={{__html:d.sellEquipment.completeShopDescription}}></span></p>                                
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        <div className="container py-5">
            <h1 className="timehead">{d.sellEquipment.timeCrunchTitle}</h1>
            <p  className="timepara" >  
            <span dangerouslySetInnerHTML={{__html:d.sellEquipment.timeCrunchDescription}}></span>
            </p>
            <div className="row" >
            <div className="col-md-2"></div>
            <div className="circle col-md-2" >{d.sellEquipment.commision}</div>
            <div className=" col-md-2 mobildiv hrdiv" ><hr className="hrline"/>  </div>
            <div className="circle col-md-2">{d.sellEquipment.guarantee}</div>
            <div className=" col-md-2 mobildiv hrdiv" ><hr className="hrline"/></div>
            <div className="circle col-md-2">{d.sellEquipment.cashPurchase}</div>
            </div>
            
            <p className="hrpara" >  {d.sellEquipment.solution} </p>
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
           <div className="row mb-5" >  
         <div className="col-6">
         <div className="card"> 
         
            <img src="assets/images/sell/MachineryMaxOffices.png" alt="office" className="card-img"/>
         
         </div>
         </div>       
            <div className="col-md-6" > 
            
             <h2 className="analytictext"><br/>{d.sellEquipment.officeLocations}</h2>
             <p  className="analytictextpara1" > 
             <span dangerouslySetInnerHTML={{__html:d.sellEquipment.officeLocationsDescription}}></span>
              </p>
            </div>
         </div> 
         <br/>  <br/> <br/> 
           <div className="row" >  
         
         <div className="col-md-5"> 
         
         
          <h2 className="analytictext">{d.sellEquipment.analyticalData}</h2>
             <p className="analytictextpara2" > 
             <span dangerouslySetInnerHTML={{__html:d.sellEquipment.analyticalDataDescription}}></span>
              </p>
         
         </div>
            
            
            <div className="col-md-7" > 
            
            
            <div className="card">
                            <div className="row">
                                
                                   <div className="col-md-6 ">
                                  <img src="assets/images/sell/AnalyticsUsers2019-v02.png" className="analyticimgcard1" alt="analytics"/>
                                  
                                </div>
                                
                                
                                
                                
                                <div className="col-md-6" >
                                    <img src="assets/images/sell/SessionsByCountry.png" className="analyticimgcard2" alt="session"/>
                                  
                                    
                                
                                </div>

                              
                            </div>
            </div>
            
            
            
            
            </div>
         </div> 
        </div>   
        <div className="container-fluid wpo-contact-pg-section section-padding">
        <div className="row">
                
            <h2 className="headingindust" >{d.sellEquipment.industriesWeServe}</h2>
            
        <div className="col-md-2 mobildiv">
                    <img src="assets/images/sell/Rectangle 142.svg" className="cardfi" alt="graphic"/>
                    </div>
            
            <div className="col-md-2">
                
            <center><img src="assets/images/sell/building-contractor-worker-using-hand-held-worm-drive-circular-saw-cut-boards.png" alt="boards"/></center>
                
            <h2  className="industrytext">{d.sellEquipment.woodWorkingIndustry}</h2>
                </div>
                            
                            
                <div className="col-md-2">
                
            <center>   <img src="assets/images/sell/close-up-construction-site-excavator.png" alt="excavator"/> </center>
                <h2  className="industrytext">{d.sellEquipment.heavyEquipmentIndustry}</h2>
                
                </div>
                
                
                
                            <div className="col-md-2">
                
            <center> <img src="assets/images/sell/man-special-suit-polishing-metal-with-angle-grinder.png" alt="grinder"/></center>
                <h2  className="industrytext">{d.sellEquipment.metalWorkingIndustry}</h2>
                
                </div>
                
                
                
                            <div className="col-md-2">
                
            <center>     <img src="assets/images/sell/train-wagons-carrying-cargo-containers-shipping-companies.png" alt="containers"/> </center>
                <h2  className="industrytext">{d.sellEquipment.rollingStockIndustry}</h2>
                
                </div>
                            
                        <div className="col-md-2 mobildiv">
                    <img src="assets/images/sell/Rectangle 141.svg" className="cardli" alt="graphic"/>
                    </div> 

                    <h2 className='industrytext'>{d.sellEquipment.endTitle}</h2>               
        </div> 
        </div>  
    </section>
    </>
  )
}

export default SellEquipment