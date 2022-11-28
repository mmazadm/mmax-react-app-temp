import React from 'react'
import d from '../../assets/dictionary'
const PrivacyPolicy = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
         <h1>{d.privacyPolicy.privacyPolicyTitle}</h1>
         <p>{d.privacyPolicy.para1}</p>
         <p>{d.privacyPolicy.para2}</p>
         <p>{d.privacyPolicy.para3}</p>
         <p>{d.privacyPolicy.para4}</p>
         <p>{d.privacyPolicy.para5}</p>
         <p>{d.privacyPolicy.para6}</p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy