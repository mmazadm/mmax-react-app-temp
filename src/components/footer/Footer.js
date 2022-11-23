import React,{useState, useEffect} from 'react'
import d from '../../assets/dictionary'
import FooterMenu from './FooterMenu'
import { validateEmail } from '../../assets/utility'

const Footer = () => {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const emailValidation = (e) => {

  e.preventDefault();
  if(validateEmail(email)){
    setMessage('Subscribed')
  } else setMessage('Invalid email')
}

const handleOnChange = (e)=> {
  setEmail(e.target.value);
  setMessage("");
}

useEffect(() => {
  setTimeout(() => {
    setMessage("")
  },2000);
}, [message]);

  const usefulLinks = {
    title: 'Useful Links',
    items: [
      {
        name:'Help Contact',
        link: '/'
      },
      {
        name:'Technical Support',
        link:'/'
      },
      {
        name:'About Us',
        link:'/'
      }
    ]
  }
  const contactLinks={
    title:'Contact Us',
    items: [
      {
        name:'Terms and Conditions',
        link:'/'
      },
      {
        name:'Privacy Policy',
        link:'/'
      },
      {
        name:'Site Map',
        link:'/'
      }
    ]
  }
  return (
  <footer className="wpo-site-footer footbg1">
  <div className="wpo-support-section">
  </div>
  <div className="wpo-upper-footer">
    <br /> <br />
    <div className="container">
      <div className="row">
        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
          <div className="widget link-widget">
            <div className="widget-title">
              <img src="/assets/images/sell/mmlogo.png" alt="mmlogo" />
            </div>
            <ul>
              <li>{d.footer.siteurl}</li>
              <li>{d.footer.siteMobNo}</li>
              <li>
                <i className="ti-twitter"></i>
                <i className="ti-facebook ms-1"></i>
                <i className="ti-instagram ms-1"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
          <FooterMenu menu={usefulLinks}/>
        </div>
        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
          <FooterMenu menu={contactLinks}/>
        </div>
        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="widget  contact-widget link-widget">
            <h2 style={{ color: "white", marginTop: '30px' }}>
              <span dangerouslySetInnerHTML={{__html:d.footer.newsletterSubscription}}></span>
            </h2>
            <form action="https://Com.us9.list-manage.com/subscribe/post?u=33c58f4c369cbafa2651ae21a&id=ac7a559fae"
            method="post">
              <div className="input-1">
                <input
                  name="Email"
                  id="Email"
                  type="email"
                  value={email}
                  className="form-control"
                  placeholder="email"
                  required
                  onChange={handleOnChange}
                  style={{
                     width: '300px',
                     borderRadius: '20px',
                     backgroundColor: "transparent",
                     borderColor: "white",
                  }}
                />
              </div>
              <div className="submit clearfix">
                <button
                className='bg-transparent'
                type="submit">
                  <i className="fa fa-paper-plane" aria-hidden="true" />
                </button>
              </div>
              {message}
            
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* end container */}
  </div>
  <div className="wpo-lower-footer bg-dark" >
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <p className="copyright">
          © Copyright 2022 MachineryMax.Com. All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of MachineryMax.Com.
          </p>
        </div>
      </div>
    </div>
  </div>
    </footer>
  )
}

export default Footer
