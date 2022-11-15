import React from 'react'
import d from '../assets/dictionary'

const Financing = () => {
    const pillsTab = [
        {
            class:"nav-link tabtext active",
            name: "Amount",
            limit: "Up to $150,000",
            link: '/undercon'

        },
        {
            class:"nav-link tabtext ",
            name: "Term Length ",
            limit: "30 days - 72 months",
            link: '/undercon'
        },
        {
            class:"nav-link tabtext ",
            name: "Rates ",
            limit: "As Low As 5.49 %",
            link: '/undercon'
        },
        {
            class:"nav-link tabtext ",
            name: "Funding Speed ",
            limit: " As fast as 1 Day",
            link: '/undercon'
        }
    ]
    
    return (
        <>
            {/* Section Equipment Financing */}
            <section className="wpo-contact-pg-section section-padding eqspace" >
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12">
                            <h1 className="eqhead" >{d.financing.financingTitle}</h1>
                            <p className="eqpara">
                            <span dangerouslySetInnerHTML={{__html:d.financing.financingIntroduction}}></span>
                                
                            </p>
                        </div>

                        <div className="msgstrip" >
                             <p className="msgstrippara">{d.financing.preApprovedBidTitle}</p>
                        </div>  


                        <section className="wpo-contact-pg-section section-padding eqspace" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                                {pillsTab.map((pill, key) => {

                                    return (
                                        <li className="nav-item" role="presentation">
                                            <button className={pill.class} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button"  role="tab" aria-controls="pills-home" aria-selected="true" ><a href={pill.link} style={{"textDecoration":null,"color": "inherit"}}><br />{pill.name}<br />{pill.limit}<br /><br /></a></button>
                                        </li>
                                    )

                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div>


            </section>



            <div className="container">
                    <div className="row">
                        {/* <div className="col col-lg-12"> */}

                            <div className="col-md-5 offset-md-2 " >
                                <br /> <br /> <br /> <br />
                                <h1 className="processhead" >{d.financing.processTitle}</h1>
                                <p>
                                    <span dangerouslySetInnerHTML={{__html:d.financing.step1}}></span>
                                    {/* 1. Apply Online <br />&nbsp &nbsp It only takes 3 minutes. */}
                                </p>


                                <p>
                                    <span dangerouslySetInnerHTML={{__html:d.financing.step2}}></span>
                                    {/* 2. Sign your documents electronically.<br />
                                    &nbsp &nbsp    Receive your contracts in a secure online format. */}

                                </p>

                                <p>
                                    <span dangerouslySetInnerHTML={{__html:d.financing.step3}}></span>
                                    {/* 3. Get your financing.<br />
                                    &nbsp &nbsp     Receive your contracts in a secure online format. */}

                                </p>

                            </div>
                            <div className="col-md-5">
                                <br /> <br /> <br /> <br />
                                <h1 className="processhead2">{d.financing.getStartedTitle}</h1>
                                <br /><br />
                                <center><a href="about.html" className="theme-btn applytbtn" >{d.financing.applyNow} </a> </center>

                            </div>
                        </div>
                    </div>





                    </div>
                </div>

               
            </section>


            <section className="wpo-contact-pg-section section-padding eqspace" >
                <div className="container">
                    <div className="row">
                        {/* <div className="col col-lg-12"> */}

                            <div className="col-md-5 offset-md-2 " >
                                <br /> <br /> <br /> <br />
                                <h1 className="processhead" >The Process</h1>
                                <p>
                                    1. Apply Online <br />&nbsp &nbsp It only takes 3 minutes.
                                </p>


                                <p>
                                    2. Sign your documents electronically.<br />
                                    &nbsp &nbsp    Receive your contracts in a secure online format.

                                </p>

                                <p>
                                    3. Get your financing.<br />
                                    &nbsp &nbsp     Receive your contracts in a secure online format.

                                </p>

                            </div>
                            <div className="col-md-5">
                                <br /> <br /> <br /> <br />
                                <h1 className="processhead2">Ready to get started?</h1>
                                <br /><br />
                                <center><a href="about.html" className="theme-btn applytbtn" >Apply Now </a> </center>

                            </div>
                        </div>
                    </div>
                
            </section>

        </>
    )
}
export default Financing