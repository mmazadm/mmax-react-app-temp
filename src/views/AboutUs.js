import React from 'react'
import d from '../assets/dictionary'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

const AboutUs = () => {    

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
    <div className="container">
      <div className="row">
          {d.about.stats.map(item => (
            <div className="col-lg-2 col-md-4 col-sm-6"> 
              <div className="row singelsymbol" >
                <div className="col-md-4 statstop mx-auto" >
                  <img src={item.icon} alt={item.title} className="statswidth"/>
                </div>
                <div className="col-md-8 statscontent mx-auto text-center">
                  <span className="statstext" >{item.count} <br/><span dangerouslySetInnerHTML={{__html:item.title.toUpperCase()}}></span></span>
                </div>      
              </div>                  
            </div>
          ))}
      </div>
    </div>
    {/** services section */}
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <h1 className="headservice">{d.about.serviceTitle}</h1>
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
      {d.about.team.map((item,key) => (
        <div className={`col-sm-6 col-md-4 col-lg-3 text-center`}>
        <div className="opp">
          <img className="rounded-circle mb-5" src={item.photo}  width="200px" height="200px"/>
          <span className="teamdiv" >
            {item.name}
            <p className="teamclass">{item.title}</p>
            <p className="teamclass">{item.city}</p>  
            <p className="teamclass">{item.email}</p>  
            <p className="teamclass">Direct: {item.direct}</p>  
            <p className="teamclass">Cell: {item.cell}</p>  
            
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
          <div className="col-12">
            <article>
              <OwlCarousel className="owl-theme" items={1} loop dots autoPlay>
                  {d.about.testimonials.map(item => (
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
                        <p>{item.companyName}</p>
                        <p>{item.city}</p>
                      </div>
                  </div>
                  ))}
              </OwlCarousel>
            </article>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutUs