import React from 'react'
import d from '../assets/dictionary'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

const AboutUs = () => {

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

  const testimonials = [
    {
      name:"Sia Dev",
      role:"Manager",
      photo:"assets/images/sell/tsagana.png",
      quote:'MachineryMax offers its services to financial institutions, bankruptcy trustees, and turn around managers.'
    },
    {
      name:"Jane Doe",
      role:"Seller",
      photo:"assets/images/sell/tsagana.png",
      quote:'MachineryMax offers its services to financial institutions, bankruptcy trustees, and turn around managers.'
    }
  ]
  return (
    <>
    {/* Section Mission statement */}
    <section className="wpo-contact-pg-section mission-section section-padding" >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col col-lg-7 ">
            <div className="card p-5" >
              <div className="card-body" >
                <h1 className="cardstrip card-title">{d.about.missionTitle}</h1>
                  <p className="cardpara card-text">
                   {d.about.missionStatement}
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
          <h1 className="headservice">{d.about.service}</h1>
        </div>
        <div className="row office-info">
          {d.about.services.map(item=>(
          <div className="col-md mb-4">
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
                      <li key={key} className="bullettext">
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
        <h2 className="aboutteamstyle" >{d.about.ourTeam}</h2>
      </div>
      <div className="row teamrow"> 
      {team.map((item,key) => (
        <div className={`col-sm-6 col-md text-center`}>
        <div className="opp">
          <img className="rounded-circle" src={item.photo} alt="user"/>
          <span className="teamdiv" >
            {item.name}
            <p className="teamclass">{item.title}</p>  
            <a href={item.facebook} target='_blank' rel='noreferrer' alt='facebook'><i className="ti-facebook icondiv"/></a>
            <a href={item.linkedIn} target='_blank' rel='noreferrer' alt='linkedin'><i className="ti-linkedin icondiv2"/></a>
            <a href={item.instagram} target='_blank' rel='noreferrer' alt='instagram'><i className="ti-instagram icondiv2"/></a>
            <br/> 
          </span>
        </div>  
      </div> 
      ))}                  
      </div>
    </div>
    </section>
    {/** testimonials */}
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <h2 className="aboutteamstyle" >{d.about.customersReviewTitle}</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <article>
              <OwlCarousel className="owl-theme" items={1} loop dots autoPlay>
                  {testimonials.map(item => (
                    <div className="large-12 columns testimonial">
                      <div className="quote">
                        <p className="testimonialcolor">{item.quote}</p>
                      </div>
                      <div className="student">
                        <div className="photo round-image">
                          <img src={item.photo} alt="user-img"/>
                        </div>
                        <p>{item.name}</p>
                        <p>{item.role}</p>
                      </div>
                  </div>
                  ))}
              </OwlCarousel>
            </article>
          </div>
          <div className="col-md-6">
            <div className="row symbols">
              {stats.map(item => (
                <div className="col-6"> 
                  <div className="row singelsymbol" >
                    <div className="col-md-4 statstop mx-auto" >
                      <img src={item.icon} alt={item.title} className="statswidth"/>
                    </div>
                    <div className="col-md-8 statscontent mx-auto">
                      <span className="statstext" >{item.count} <br/><span dangerouslySetInnerHTML={{__html:item.title.toUpperCase()}}></span></span>
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