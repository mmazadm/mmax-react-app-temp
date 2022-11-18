import React from 'react'
import LastestAuctions from '../components/home/LastestAuctions'
import LastestListings from '../components/home/LatestListings'

const Home = () => {
  
  return (
    <>
    <section className="wpo-contact-pg-section home-section section-padding" >
      <div className="container">
        <h1>Heavy <span className="text-primary">Machinery, </span>Auctions Marketplace</h1>
      </div>    
    </section>
    <div className="bid-now-btn">
        <img src="/assets/images/home/bid-now.jpg" alt="bid-now"/>
    </div>
    <section className="wpo-contact-pg-section section-padding">
        <h1 className="text-center">LATEST AUCTIONS</h1>
        <div className="container">
          <LastestAuctions/>
        </div>
    </section>
    <section className="wpo-contact-pg-section section-padding">
        <h1 className="text-center">CATEGORIES</h1>
        <div className="container">
          <LastestListings/>
        </div>
    </section>
    </>
  )
}

export default Home