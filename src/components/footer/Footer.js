import React from 'react'
import d from '../../assets/dictionary'
import FooterMenu from './FooterMenu'

const Footer = () => {
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
        name:'Terms and Condition',
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
              <img src="assets/images/sell/mmlogo.png" alt="mmlogo" />
            </div>
            <ul>
              <li>{d.footer.siteurl}</li>
              <li>{d.footer.siteMobNo}</li>
              <li>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
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
            <form >
              <div className="input-1">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required=""
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
                  type="submit"
                >
                  <i className="fa flaticon-send" aria-hidden="true" />
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
        <div className="col col-lg-6 col-12">
          <p className="copyright"> </p>
        </div>
      </div>
    </div>
  </div>
    </footer>
  )
}

export default Footer
