import React from 'react'
import d from '../assets/dictionary'

const AboutUs = () => {
  const services = [
    {
      icon:'assets/images/sell/hammer.png',
      title:'Auction',
      desc:'MachineryMax offers its services to financial institutions, bankruptcy trustees, and turn around managers',
      pointers:['Collections','Asset Recovery','Asset Remarketing','Legal Services']
    },
    {
      icon:'assets/images/sell/hammer.png',
      title:'Auction',
      desc:'MachineryMax offers its services to financial institutions, bankruptcy trustees, and turn around managers',
      pointers:['Collections','Asset Recovery','Asset Remarketing','Legal Services']
    },
    {
      icon:'assets/images/sell/handshake.png',
      title:'Acquisitions',
      desc:'MachineryMax offers its services to financial institutions, bankruptcy trustees, and turn around managers',
      pointers:['Collections','Asset Recovery','Asset Remarketing','Legal Services']
    }
  ]

  const team = [
    {
      name:'Sia Dev',
      title:'Logistics Manager',
      facebook:'https://facebook.com',
      linkedIn:'https://linkedin.com',
      instagram:'https://instagram.com',
      photo:'assets/images/sell/Optimized-team-member.jpg'
    },
    {
      name:'Sia Dev',
      title:'Logistics Manager',
      facebook:'https://facebook.com',
      linkedIn:'https://linkedin.com',
      instagram:'https://instagram.com',
      photo:'assets/images/sell/Optimized-team-member.jpg'
    },
    {
      name:'Sia Dev',
      title:'Logistics Manager',
      facebook:'https://facebook.com',
      linkedIn:'https://linkedin.com',
      instagram:'https://instagram.com',
      photo:'assets/images/sell/Optimized-team-member.jpg'
    },
    {
      name:'Sia Dev',
      title:'Logistics Manager',
      facebook:'https://facebook.com',
      linkedIn:'https://linkedin.com',
      instagram:'https://instagram.com',
      photo:'assets/images/sell/Optimized-team-member.jpg'
    },
    {
      name:'Sia Dev',
      title:'Logistics Manager',
      facebook:'https://facebook.com',
      linkedIn:'https://linkedin.com',
      instagram:'https://instagram.com',
      photo:'assets/images/sell/Optimized-team-member.jpg'
    }
  ]

  const stats = [
    {
      count:8253,
      title:'Auctions',
      icon:'assets/images/sell/cart.png'
    },
    {
      count:458,
      title:'Sellers',
      icon:'assets/images/sell/dollar_thumb.png'
    },
    {
      count:458,
      title:'Users <br/> helped',
      icon:'assets/images/sell/headphone.png'
    },
    {
      count:116,
      title:'Employees',
      icon:'assets/images/sell/group.png'
    },
    {
      count:4253,
      title:'Total <br/> Users',
      icon:'assets/images/sell/laptop.png'
    },
    {
      count:450,
      title:'Problems <br/> Solved',
      icon:'assets/images/sell/bulb.png'
    }
  ]
  return (
    <>
    {/* Section Mission statement */}
    <section className="wpo-contact-pg-section mission-section section-padding" >
      <div className="container-fluid">
        <div className="row flex-row-reverse">
          <div className="col col-lg-7 ">
            <div className="card aboutmi" >
              <div className="row rowcard" >
                <h1 className="cardstrip">{d.about.missionTitle}</h1>
                  <p className="cardpara">
                    MachineryMax is committed to providing maximum service, and return on investment by utilizing our state of the art, high traffic online auction marketplace offering machinery sellers and buyers a global, transparent, and easy to use system.
                  </p>
              </div>
            </div>
          </div> 
        </div>
      </div>     
    </section>
    {/** services section */}
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <h1 className="headservice">Services</h1>
        </div>
        <div className="row office-info">
          {services.map(item=>(
          <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front icon">
                  <img src={item.icon} className="serimg" alt="auctions"/>
                  <h2 style={{"color":"#ff4402"}}>{item.title}</h2>                          
                </div>
                <div className="flip-card-back">
                  <p className="serpara">
                    {item.desc}
                  </p>    
                  <ul className="ulbullet" >
                    {item.pointers.map((point, key) => (
                      <li className="bullettext">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
    {/** team section */}
    <section className="wpo-contact-pg-section section-padding">
    <div className="container">
      <div className="row">
        <h2 className="aboutteamstyle" >Our Team</h2>
      </div>
      <div className="row teamrow"> 
      {team.map((item,key) => (
        <div className={`col-md-2 ${key===0 || key===5?'offset-md-1':''}`}>
        <a href="#" className="opp">
          <img className="rounded-circle" src={item.photo} alt="user"/>
          <span className="teamdiv" >
            {item.name}
            <p className="teamclass">{item.title}</p>  
            <a href={item.facebook} target='_blank' rel='noreferrer' alt='facebook'><i className="ti-facebook icondiv"/></a>
            <a href={item.linkedIn} target='_blank' rel='noreferrer' alt='linkedin'><i className="ti-linkedin icondiv2"/></a>
            <a href={item.instagram} target='_blank' rel='noreferrer' alt='instagram'><i className="ti-instagram icondiv2"/></a>
            <br/> 
          </span>
        </a>  
      </div> 
      ))}                  
      </div>
    </div>
    </section>
    {/** testimonials */}
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <h2 className="aboutteamstyle" >What Our Customers are Saying</h2>
        </div>
        <div className="row">
          <div class="col-md-6">
            <article>
              <div id="owl">
                <div class="row">
                  <div class="large-12 columns testimonial">
                    <div class="quote">
                      <p class="testimonialcolor" >MachineryMax offers its services to financial institutions, bankruptcy trustees, and turn around managers.</p>
                    </div>
                    <div class="student">
                      <div class="photo round-image">
                        <img src="assets/images/sell/tsagana.png" alt="user-img"/>
                      </div>
                      <p>Sia Dev</p>
                      <p>Managers</p>
                    </div>
                  </div>
                  <div class="large-12 columns testimonial">
                    <div class="quote">
                      <p class="testimonialcolor" >MachineryMax offers its services to financial institutions, bankruptcy trustees, and turn around managers.</p>
                    </div>
                    <div class="student">
                      <div class="photo round-image">
                        <img src="assets/images/sell/tsagana.png" alt="user-img"/>
                      </div>
                      <p>Sia Dev</p>
                      <p>Managers</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-md-6 stats">
            <div class="row symbols">
              {stats.map(item => (
                <div class="col-md-6"> 
                  <div class="row singelsymbol" >
                    <div class="col-md-4 statstop" >
                      <img src={item.icon} alt={item.title} className="statswidth"/>
                    </div>
                    <div class="col-md-8 statscontent">
                      <span class="statstext" >{item.count} <br/><span dangerouslySetInnerHTML={{__html:item.title.toUpperCase()}}></span></span>
                    </div>      
                  </div>                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutUs