import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import d from "../../assets/dictionary";
import {url} from '../../assets/paths'
import { fetchAccountSummary } from "../../store/userSlice";

const AccountSummary = () => {
  const { authenticated, summary } = useSelector(state=> state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!authenticated)
      navigate(url.signIn)
    else
      dispatch(fetchAccountSummary())
  },[authenticated, navigate, dispatch])

  return (
    <div className="wpo-contact-form-area">
    <div className="row">
      <div className="col-md-5 formsp">
        <span className="formtitle">{d.accountSummary.generalTitle}</span>
        <br/>
        <form
          method="post"
          className="contact-validation-active"
          id="contact-form-main"
          noValidate="novalidate"
        >
          <div className="fullwidth">  
            <label className="form-control insize">{d.accountSummary.generalOption1}</label>   
             
          </div>
           <div className="fullwidth">
            <label className="form-control insize">{d.accountSummary.generalOption2}</label>     
          </div>

          <div className="fullwidth">
            
            <label className="form-control insize">{d.accountSummary.generalOption3}</label>     
          
          </div>
          <div className="fullwidth">
            <label className="form-control insize">{d.accountSummary.generalOption4}</label>     
           
          </div>
          
        </form>
      </div>
      <div className="col-md-5 offset-md-1 formsp">
        <span className="formtitle">{d.accountSummary.actionNeeded}</span>
        <br/>
        <form
          method="post"
          className="contact-validation-active"
          id="contact-form-main"
          noValidate="novalidate"
        >
          <div className="fullwidth">
            <label className="form-control insize">{d.accountSummary.actionOption1}</label>
           
          </div>
          <div className="fullwidth">
            <label className="form-control insize">{d.accountSummary.actionOption2}</label>
           
          </div>
          
        </form>
      </div>
    </div>
  </div>
  );
};

export default AccountSummary;
