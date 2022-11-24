import React,{useState} from 'react'
import d from '../../assets/dictionary'
import FooterMenu from './FooterMenu'

const Footer = () => {
const [email, setEmail] = useState("");

const handleOnChange = (e)=> {
  setEmail(e.target.value);
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
              <img src="/assets/images/sell/logo.png" alt="mmlogo" />
            </div>
            <ul>
              <li>{d.footer.siteurl}</li>
              <li><i className="fa fa-phone me-2"/>{d.footer.siteMobNo}</li>
              <li>
                <a href={d.footer.linkedIn} target="_blank" rel="noreferrer" alt="linkedin">
                  <i className="ti-linkedin"/>
                </a>
                <a href={d.footer.facebook} target="_blank" rel="noreferrer" alt="fb">
                <i className="ti-facebook ms-1"/>
                </a>
                <a href={d.footer.instagram} target="_blank" rel="noreferrer" alt="instagram">
                <i className="ti-instagram ms-1"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
          <FooterMenu menu={d.footer.usefulLinks}/>
        </div>
        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
          <FooterMenu menu={d.footer.contactLinks}/>
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
         {d.footer.copyRight}
          </p>
        </div>
      </div>
    </div>
  </div>
    </footer>
  )
}

export default Footer
