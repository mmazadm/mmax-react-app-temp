import React, { useState } from 'react'
import d from '../assets/dictionary'
import { validateEmail, validatePhone } from '../assets/utility'
import axios from 'axios'

const SellEquipment = () => {
    const [firstname, setFirstName] = useState({value:'', error:''})
    const [lastname, setLastName] = useState({value:'', error:''})
    const [city, setCity] = useState({value:'', error:''})
    const [state, setState] = useState({value:'', error:''})
    const [email, setEmail] = useState({value:'', error:''})
    const [phone, setPhone] = useState({value:'', error:''})
    const [purpose, setPurpose] = useState({value:'', error:''})
    const [desc, setDesc] = useState({value:'', error:''})
    const [timeframe, setTimeframe] = useState({value:'', error:''})
    const [response, setResponse] = useState(0)

    const validate = (e) => {
        let validated = true
        if(!firstname.value){
            validated = false
            setFirstName({...firstname, error:'Firstname required!!'})
        } else setFirstName({...firstname, error:''})
        if(!lastname.value){
            validated = false
            setLastName({...lastname, error:'Lastname required!!'})
        } else setLastName({...lastname, error:''})
        if(!city.value){
            validated = false
            setCity({...city, error:'City required!!'})
        } else setCity({...city, error:''})
 
        if(!state.value){
            validated = false
            setState({...state, error:'State required!!'})
        } else setState({...state, error:''})
 
        if(!phone.value){
            validated = false
            setPhone({...phone, error:'Phone required!!'})
        } else if (!validatePhone(phone.value)){
            setPhone({...phone, error:'Enter a valid phone number'})
        } else setPhone({...phone, error:''})
 
        if(!email.value){
            validated = false
            setEmail({...email, error:'Email required!!'})
        } else if (!validateEmail(email.value)){
            setEmail({...email, error:'Enter a valid email'})
        } else setEmail({...email, error:''})

        if(!timeframe.value){
            validated = false
            setTimeframe({...timeframe, error:'Timeframe required!!'})
        } else setTimeframe({...timeframe, error:''})

        if(!purpose.value){
            validated = false
            setPurpose({...purpose, error:'Select one option'})
        } else setPurpose({...purpose, error:''})

        if(!desc.value){
            validated = false
            setDesc({...desc, error:'Description required!!'})
        } else setDesc({...desc, error:''})

        return validated
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let validated = validate()
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
        if (validated) {
            axios.post('/api/user/sellequipment', sellEquipment)
            .then(()=> setResponse(1))
            .catch(()=> setResponse(2))
        }
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
                            <img src="/assets/images/sell/excavator-construction-site (1).png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="/assets/images/sell/gear-metal-wheels-close-up.png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="/assets/images/sell/excavator-site (1).png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="/assets/images/sell/close-up-construction-site-excavator (1).png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="/assets/images/sell/excavator-site.png" alt="machine-1"/>
                        </div>
                        <div className="col-md-6 selimbot" >
                            <img src="/assets/images/sell/cranes-seaport.png" alt="machine-1"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 sellform">                  
                    <p className="sellformpara">
                        {d.sellEquipment.consultationFormDescription}
                    </p>
                    <div className="contact-validation-active sellform1" id="contact-form-main">
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.firstName}<span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="firstname" id="firstname" value={firstname.value}
                            onChange={(e) => setFirstName({value:e.target.value, error:''})}/>
                            <p className='text-danger'>{firstname.error}</p>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.lastName} <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="lastname" id="lastname" value={lastname.value}
                            onChange={(e) => setLastName({value:e.target.value, error:''})}/>
                            <p className='text-danger'>{lastname.error}</p>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.city} <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="city" id="city"
                            onChange={(e) => setCity({value:e.target.value, error:''})}
                            value={city.value}/>
                            <p className='text-danger'>{city.error}</p>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.state} <span className="orangestar" >*</span></p>
                            <input type="text" className="form-control" 
                            name="state" id="state"
                            onChange={(e) => setState({value:e.target.value, error:''})}
                            value={state.value}/>
                            <p className='text-danger'>{state.error}</p>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.email} <span className="orangestar" >*</span></p>
                            <input type="email" className="form-control" 
                            name="email" id="email"
                            onChange={(e) => setEmail({value:e.target.value, error:''})}
                            value={email.value}/>
                            <p className='text-danger'>{email.error}</p>
                        </div>
                        <div className="sellform">
                            <p className="formfont">{d.sellEquipment.phoneNo} <span className="orangestar" >*</span></p>
                            <input type="tel" className="form-control" 
                            name="phone" id="phone"
                            onChange={(e) => setPhone({value:e.target.value, error:''})}
                            value={phone.value}/>
                            <p className='text-danger'>{phone.error}</p>
                        </div>    
                        <div className="row">   
                            <p className="formfont">{d.sellEquipment.discussionTitle} <span className="orangestar" >*</span></p>
                            {d.sellEquipment.sellingPurpose.map(item=> (
                                <>
                                <div className="col-md-2">
                                    <input type="radio" id="purpose" name="purpose" 
                                    value={item}
                                    className="radiowidth"
                                    onChange={()=> setPurpose({value:item, error:''})}/>
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="html"  className="formfont1">{item}</label>
                                </div>
                                </>
                            ))}
                            <p className='text-danger'>{purpose.error}</p>

                        </div>   
                        <div className="row">   
                            <p className="formfont">{d.sellEquipment.timeframeTitle}  <span className="orangestar" >*</span></p>
                            {d.sellEquipment.timeframeOptions.map(item=>(
                                <>
                                    <div className="col-md-2">
                                        <input type="radio" id="timeframe" name="timeframe" 
                                        value={item} 
                                        className="radiowidth"
                                        onChange={() => setTimeframe({value:item, error:''}) }/>
                                    </div>
                                    <div className="col-md-10">
                                        <label htmlFor="html"  className="formfont1">{item}</label>
                                    </div>
                                </>
                            ))}
                            <p className='text-danger'>{timeframe.error}</p>
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
                            onChange={(e) => setDesc({value:e.target.value, error:''})}
                            value={desc.value}/>
                            <p className="text-danger">{desc.error}</p>
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
                                        <button className="theme-btn sellformbtn11"
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
                    </div>
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