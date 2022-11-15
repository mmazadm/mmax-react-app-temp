import React from 'react'

const Financing = () => {
    const pillsTab = [
        {
            name: "Amount",
            limit: "Up to $150,000",

        },
        {
            name: "Term Length ",
            limit: "30 days - 72 months",
        },
        {
            name: "Rates ",
            limit: "As Low As 5.49 %",
        },
        {
            name: "Funding Speed ",
            limit: " As fast as 1 Day",
        }
    ]
    
    return (
        <>
            {/* Section Equipment Financing */}
            <section className="wpo-contact-pg-section section-padding eqspace" >
                <div className="container-fluid">
                    <div className="row">
                            <h1 className="eqhead" >Equipment Financing</h1>
                            <p className="eqpara">
                                Get financing for new and used equipment or technology for your business.<br />Access up to $150,000 application only, or up to $1million with financials. <br />Loan and lease options are available.
                            </p>
                            <div className="msgstrip">
                             <p className="msgstrippara">GET PRE-APPROVED BEFORE YOU BID!</p>
                             </div>
                    </div>
                </div>
            </section>
            <section className="wpo-contact-pg-section" >
                <div className="container">
                    <div className="row">
                            <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                                {pillsTab.map((pill, key) => {
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
                    <div className="col-md-6">
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