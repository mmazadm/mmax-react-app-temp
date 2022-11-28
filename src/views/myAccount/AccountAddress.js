import React from 'react'
import d from '../../assets/dictionary'

const AccountAddress = () => {
  return (
   
    <>
                <div className="msgstrip">
                  <p className=" accstrip">{d.accountAddress.account} &gt; {d.accountAddress.address}</p>
                </div>
                <br/>
                <div className="wpo-contact-form-area ">
                  <div className="row">
                    <div className="col-md-12 formsp">
                      <form
                        method="post"
                        className="contact-validation-active"
                        id="contact-form-main"
                        noValidate="novalidate"
                      >
                        <div className="fullwidth">
                          <span className="formtitle">{d.accountAddress.city} </span>
                          <br/>
                        </div>
                        <div className="fullwidth">
                          <span className="formtitle">{d.accountAddress.name} </span>
                          <br/>
                        </div>
                        <div className="fullwidth">
                          <span className="formtitle">{d.accountAddress.city} </span>
                          <br/>
                        </div>
                        <div className="fullwidth">
                          <span className="formtitle">
                            {d.accountAddress.cityStatePin}
                          </span>
                          <br/>
                        </div>
                        <div className="fullwidth">
                          <span className="formtitle">{d.accountAddress.country} </span>
                          <br/>
                        </div>
                        <div className="fullwidth">
                          <span className="activeaccounttabs btn">
                            {d.accountAddress.primaryAddress}
                          </span>
                          <span className="activeaccounttabs1 btn">{d.accountAddress.edit}</span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="addbtnnew mt-2">
                  <span className="activeaccounttabs1 btn ">{d.accountAddress.addNew}</span>
                </div>
              </>
    
    
  )
}

export default AccountAddress