import React from 'react'
import d from '../../assets/dictionary'
const Sidebar = () => {
  return (
    <>
            <span className="accounttabs">{d.accountCreditCard.summary}</span>
            <br/>
            <br/>
            <span className="accounttabs">{d.accountCreditCard.bidding}</span>
            <br/>
            <br/>
            <span className="accounttabs">{d.accountCreditCard.siteFees}</span>
            <br/>
            <br/>
            <span className="activeaccounttabs">{d.accountCreditCard.account}</span>
            <br/>
            <br/>
            <span className="tabsubmenu">{d.accountCreditCard.details}</span>
            <br/>
            <span className="tabsubmenu">{d.accountCreditCard.address}</span>
            <br/>
            <span className="activetabsubmenu">{d.accountCreditCard.creditCardTitle}</span>
            <br/>
            <span className="tabsubmenu">{d.accountCreditCard.password}</span>
            <br/>
            <br/>
            <span className="accounttabs">{d.accountCreditCard.message}</span>
    </>
  )
}

export default Sidebar
