import React from 'react'
import d from '../../assets/dictionary'

const AccountCreditCard = () => {
  return (
   <>
   <div className="msgstrip">
                <p className=" accstrip">{d.accountCreditCard.account} &gt; {d.accountCreditCard.creditCardTitle}</p>
              </div>
              <br/>
              <div className="wpo-contact-form-area">
                <div className="row" style={{ paddingBottom: "200px" }}>
                  <div className="col-md-3 formtitle2"> {d.accountCreditCard.creditcard} </div>
                  <div className="col-md-3 formtitle2"> {d.accountCreditCard.cardType}</div>
                  <div className="col-md-3 formtitle2">{d.accountCreditCard.cardType}</div>
                  <div className="col-md-3 formtitle2"> {d.accountCreditCard.billingAddress} </div>
                  <br/>
                  <div className=' row mt-2'>
                  <div className="col-md-3 formtitle2"> x1111 </div>
                  <div className="col-md-3 formtitle2">visa </div>
                  <div className="col-md-3 formtitle2"> 09/25 </div>
                  <div className="col-md-3 formtitle2"> Home Marianne J 4306 Sunset Drive Pine Bluff, Arkansas 71601 UNITED KINGDOM</div>
                 
                 </div>
                 
                </div>
                <button className='col-md-12 btn btn-success'>Primary Card</button>
                <button className='col-md-12 btn btn-danger'>Delete</button>
              </div>
              <div className="addbtnnew">
                <span className="activeaccounttabs1 btn">{d.accountCreditCard.addNew}</span>
              </div>
   </>
  )
}

export default AccountCreditCard