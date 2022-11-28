import React from 'react'
import d from '../../assets/dictionary'

const Financing = () => {
    
    
    return (
        <>
            {/* Section Equipment Financing */}
            <section className="wpo-contact-pg-section section-padding eqspace" >
                <div className="container-fluid">
                    <div className="row">
                            <h1 className="eqhead" >{d.financing.financingTitle}</h1>
                            <p className="eqpara">
                            <span dangerouslySetInnerHTML={{__html:d.financing.financingIntroduction}}></span>
                                
                            </p>
                            <div className="msgstrip">
                             <p className="msgstrippara">{d.financing.preApprovedBidTitle}</p>
                             </div>
                    </div>
                </div>
            </section>
            <section className="wpo-contact-pg-section" >
                <div className="container">
                    <div className="row">
                            <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                                {d.financing.pillsTab.map((pill, key) => {
                                    return (
                                        <li key={key} className="nav-item" role="presentation">
                                            <button className={`nav-link tabtext ${key === 0? 'active':0}`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button"  role="tab" aria-controls="pills-home" aria-selected="true" ><a href={pill.link} style={{"textDecoration":null,"color": "inherit"}}><br />{pill.name}<br />{pill.limit}<br /><br /></a></button>
                                        </li>
                                )})}
                            </ul>
                    </div>
                </div>
            </section>


            <section className="section-padding" >
            <div className="container">
                <div className="row">
                        {/* <div className="col col-lg-12"> */}

                    <div className="col-md-6" >
                        <br /> <br /> <br /> <br />
                        <h1 className="processhead" >{d.financing.processTitle}</h1>
                        <p>
                           <span dangerouslySetInnerHTML={{__html:d.financing.step1}}></span>
                        </p>


                        <p>
                            <span dangerouslySetInnerHTML={{__html:d.financing.step2}}></span>

                        </p>

                        <p>
                            <span dangerouslySetInnerHTML={{__html:d.financing.step3}}></span>

                        </p>

                    </div>
                    <div className="col-md-6">
                                <br /> <br /> <br /> <br />
                                <h1 className="processhead2">{d.financing.getStartedTitle}</h1>
                                <br /><br />
                                <center><a href="https://machinerymax.directcapital.com/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="theme-btn applytbtn" >{d.financing.applyNow} </a> </center>

                    </div>
                </div>
            </div>
            </section>

        </>
    )
}
export default Financing