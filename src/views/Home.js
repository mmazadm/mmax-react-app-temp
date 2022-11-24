import React from 'react'
import d from '../assets/dictionary'
import LastestAuctions from '../components/home/LastestAuctions'
import LastestListings from '../components/home/LatestListings'

const Home = () => {
  
  return (
    <>
    <section className="wpo-contact-pg-section home-section section-padding" >
      <div className="container">
        <h1>{d.home.homeTitle.toUpperCase()}</h1>
        <h4 className="text-white">{d.home.homeSubtitle}</h4>
      </div>    
    </section>
    <div className="bid-now-btn">
        <img src="/assets/images/home/bid-now.jpg" alt="bid-now"/>
    </div>
    <section className="wpo-contact-pg-section section-padding">
        <h1 className="text-center">{d.home.latestAuctions}</h1>
        <div className="container">
          <LastestAuctions/>
        </div>
    </section>
    <section className="wpo-contact-pg-section section-padding">
        <h1 className="text-center">{d.home.categories}</h1>
        <div className="container">
          <LastestListings/>
        </div>
    </section>
    </>
  )
}

export default Home