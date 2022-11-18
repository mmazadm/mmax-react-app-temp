import React from 'react'
import { useOutlet } from 'react-router-dom'
import Sidebar from '../components/myAccount/Sidebar'

const AccountSidebar = () => {
  return (
    <section className="wpo-contact-pg-section section-padding eqspace">
        <div className="container-fluid accountcont">
            <div className="row">
                <div className="col col-lg-11 offset-md-1 acch1">
                    <h1 className="eqhead acch1align">MY ACCOUNT</h1>
                </div>
            </div>
            <div className="row">
                <div className="col col-md-1 offset-md-1 tabacc">
                    <Sidebar/>
                </div>
                <div className="col col-md-8 cardcol1">
                    {useOutlet()}
                </div>
                <div className="col col-md-1 mobildiv">
                    <img
                        src="/assets/images/sell/Rectangle 147.svg"
                        className="accrect1" alt="presentartional"
                    />
                </div>
            </div>
        </div>
        <div id="backgrounddiv" />
    </section>
  )
}

export default AccountSidebar