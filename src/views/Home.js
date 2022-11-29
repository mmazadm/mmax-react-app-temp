import React from 'react'
import { useSelector } from 'react-redux'
import d from '../assets/dictionary'
import LastestAuctions from '../components/home/LastestAuctions'
import LastestListings from '../components/home/LatestListings'
import Loader from '../components/common/Loader'
import { Link } from 'react-router-dom'
import { url } from '../assets/paths'

const HomeStaticBottom = () => {
  return (
   <>
   <div>
  <section>
    <div>
      <img src="/assets/images/sell/factory.jpg" className="factimgwidth" alt="factory" />
    </div>
    <div className="orangeindex">
      <p className="msgqs">
        WHERE YOU CAN FIND US ?
      </p>
    </div>
    <div className="mapdiv">
      <img src="/assets/images/sell/map.png" alt="map" className="mapclass" /></div>
    <div className="orangeheight">
    </div>
  </section>
  <section className="newsbg ">
    <div className="container mb-3">
      
      <div >
      <h1 className="newshead p-5  ">LATEST NEWS</h1>
      </div>
      
     
      <div className="row mb-2">
        <div className="col-md-4">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <img className="card-img-right flex-auto  d-md-block readmore-img" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="/assets/images/sell/news3.png" data-holder-rendered="true" />
            <div className="card-body d-flex flex-column align-items-start">
              <h3 className="mb-0">
                <Link to={url.home} className="readmore-title">Association of Women in Construction</Link>
              </h3>
              <p className="card-text mb-auto readmore-para">Bring to the table win-win survival strategies to ensure .</p>
              <Link to={url.home} className="theme-btn catbtnsread postbtns">READ MORE </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <img className="card-img-right flex-auto d-md-block readmore-img" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="/assets/images/sell/news3.png" data-holder-rendered="true" />
            <div className="card-body d-flex flex-column align-items-start">
              <h3 className="mb-0">
                <Link to={url.home} className="readmore-title">Association of Women in Construction</Link>
              </h3>
              <p className="card-text mb-auto readmore-para">Bring to the table win-win survival strategies to ensure .</p>
              <Link to={url.home} className="theme-btn catbtnsread postbtns">READ MORE </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <img className="card-img-right flex-auto  d-md-block readmore-img" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="/assets/images/sell/news3.png" data-holder-rendered="true" />
            <div className="card-body d-flex flex-column align-items-start">
              <h3 className="mb-0">
                <Link to={url.home} className="readmore-title">Association of Women in Construction</Link>
              </h3>
              <p className="card-text mb-auto readmore-para">Bring to the table win-win survival strategies to ensure .</p>
              <Link to={url.home} className="theme-btn catbtnsread postbtns">READ MORE </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
  </section>
  <div className="wpo-support-section ">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-4">
          <div className="wpo-support-title">
            <img className="group19wid" src="/assets/images/sell/Group 19.png" alt='group'/>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="wpo-support-title">
            <h2>DOWNLOAD MOBILE
              APPLICATIONS.</h2>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="wpo-support-munber">
            <img className="group19wid" src="/assets/images/sell/app.png" alt='app' />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

const HomeStatic = () => {
  return (
    <>
    <div className="container-fluid g-0">
  <div className="row g-0">
    <div className="col-md-6 leftcards">
      <div className="card">
        <img className="card-img-top card-img-top1" src="/assets/images/sell/sell1.png" alt="Card" />
        <div className="card-img-overlay mt-5">
          <h2 className="card-title cardtitletexts">SELL YOUR <br />EQUIPMENT</h2>
          
          <Link to={url.sellEquipment} className="theme-btn cardthemebtn">VIEW MORE</Link>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top card-img-top2" src="/assets/images/sell/sell3.png" alt="Card" />
        <div className="card-img-overlay mt-5 ">
        
          <h2 className="card-title cardtitletexts">BROWSE ALL<br />AUCTION LOTS</h2>
          
          <Link to={url.browse} className="theme-btn cardthemebtn">VIEW MORE</Link>
        </div>
      </div>
    </div>
    <div className="col-md-6 leftcards">
      <div className="card">
        <img className="card-img-top card-img-top3" src="/assets/images/sell/sell2.png" alt="Card" />
        <div className="card-img-overlay mt-5">
          
          <h2 className="card-title cardtitletexts">CURRENT <br />AUCTION EVENTS</h2>
          
          <Link to={url.home} className="theme-btn cardthemebtn">VIEW MORE</Link>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top card-img-top4" src="/assets/images/sell/sell4.png" alt="Card" />
        <div className="card-img-overlay mt-5">
        
          <h2 className="card-title cardtitletexts">MARKETPLACE</h2>
          
          <Link to={url.home} className="theme-btn cardthemebtn">VIEW MORE</Link>
        </div>
      </div>
    </div>
  </div>
  </div>

    </>
  )
}

const Home = () => {
  const {isLoading} = useSelector(state=> state.events)
  window.scrollTo(0, 0)

  return (
    <>
    <section className="home-section section-padding" >
      <div className="container">
        <h1>{d.home.homeTitle.toUpperCase()}</h1>
        <h4 className="text-white">{d.home.homeSubtitle}</h4>
      </div>    
    </section>
    <div className="bid-now-btn">
        <img src="/assets/images/home/bid-now.jpg" alt="bid-now"/>
    </div>
      <div className={isLoading?'d-block':'d-none'}><Loader/></div>
      <section className={`section-padding ${isLoading?'d-none':'d-block'}`}>
        <h1 className="evtheadeing101" >{d.home.latestAuctions}</h1>
        <div className="container">
          <LastestAuctions/>
          <div className="evt_btn_mar">
            <center> <Link to="/" className="theme-btn viewallbtn" >VIEW ALL</Link></center>
          </div>
        </div>
        {HomeStatic()}
        <div className={`leftcards ${isLoading?'d-none':'d-block'}`}>
          <div className="flexcat">
            <h1 className="heading101">{d.home.categories}</h1>
            <img src="assets/images/sell/Group69.png"
            alt="presentational" 
            className="group69"/>
          </div>
          <div className="container">
            <LastestListings/>
          </div>
        </div>
      </section>
      {HomeStaticBottom()}
    </>
  )
}

export default Home