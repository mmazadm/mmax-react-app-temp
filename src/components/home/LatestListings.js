import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchListings, fetchListingsByCategory } from '../../store/listingSlice'
import Spinner from '../common/Spinner'
import { getLotThumbnail, getTimeLeft } from '../../assets/utility'

const LastestListings = () => {
    const { loadingListings, listings, 
        categoriesWithCount, currentCategory } = useSelector(state => state.listings)
    const dispatch = useDispatch()

    const handleSelect = (e) => {
        const {id} = e.currentTarget.dataset;
        if(id) dispatch(fetchListingsByCategory(0,5, id))
        else dispatch(fetchListings(0,5,1))
    }

    useEffect(() => {
        dispatch(fetchListings(0,5,1))
      }, [dispatch])

    const catLeftScroll = () => {
        const left2 = document.querySelector(".scroll-images");
        left2.scrollBy(200, 0); 
    }

    const catRightScroll = () => {
        const right2 = document.querySelector(".scroll-images");
        right2.scrollBy(-200, 0);
    }

    const lotLeftScroll = () => {
        const left1 = document.querySelector(".scroll-images1");
        left1.scrollBy(200, 0);
    }

    const lotRightScroll = () => {
        const right1 = document.querySelector(".scroll-images1");
        right1.scrollBy(-200, 0);      
    }

    if(!categoriesWithCount.list || categoriesWithCount.list.length === 0) return <Spinner/>
    return(
        <>
        <div className="cover">
            <button className="left" onClick={()=>catRightScroll()}>
                <i className="far fa-arrow-alt-circle-left"/>
            </button>
            <div className="scroll-images">
                <ul className="nav nav-pills nav-justified nowrap-nav npill" role="tablist">
                    <li className="nav-item pillboard">
                        <button className={`nav-link n-link ${Object.keys(currentCategory).length === 0?'active':''}`}
                            data-bs-toggle="pill"
                            data-id = {null}
                            data-name = 'All'
                            onClick={handleSelect}
                            style={{fontSize:'1.2rem'}}>
                                ALL
                        </button>
                    </li>
                    {categoriesWithCount.list.map((item) => 
                        categoriesWithCount.counts[item.id] &&
                        <li class="nav-item pillboard">
                            <button className={`nav-link n-link ${currentCategory.id === item.id?'active':''}`}
                            data-bs-toggle="pill"
                            data-id = {item.id}
                            data-name = {item.name}
                            key = {item.id}
                            style={{fontSize:'1.2rem'}}
                            onClick={handleSelect}>
                                {item.name.toUpperCase()}
                                <span className="badge rounded-pill bg-secondary text-center ms-2">
                                    {categoriesWithCount.counts[item.id]}
                                </span>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            <button className="right" onClick={()=>catLeftScroll()}>
                <i class='far fa-arrow-alt-circle-right'/>
            </button>
        </div>
        <div className="tab-content">
            <div id="home" className="container tab-pane active">
                <br/>
                <div className="row catmargintop">
                    <div className="cover1">
                        <button className="left1" onClick={()=>lotRightScroll()}>
                            <i  className="far fa-arrow-alt-circle-left evticon_st"></i>
                        </button>
                            {loadingListings || !listings.list?
                                <Spinner/>:
                                <div className="scroll-images1">
                                    <div className="col-md-3 evt_card">
                                      <div className="wsk-cp-product1 cattopic">
                                        <div className="title-product cattitletopic">
                                            {currentCategory.name? currentCategory.name:'All'}
                                            <p className="prodclass">
                                                {categoriesWithCount.counts[currentCategory.id]}
                                                {categoriesWithCount.counts[currentCategory.id] === 1? ' Product':' Products'}
                                            </p>
                                            <a href="/" className="theme-btn catbtns" >VIEW ALL </a>
                                        </div>
                                      </div>
                                    </div>
                                    {listings.list.map((item) => 
                                    <div className="col-md-3 evt_card" key={item.id} >
                                        <div className="wsk-cp-product1" >
                                            <div className="wsk-cp-img">
                                                <img src={getLotThumbnail(item.media)} 
                                                alt={`${item.id} img`} 
                                                className="img-responsive catheight"
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null;
                                                    currentTarget.src="/assets/images/placeholder-thumbnail.gif";
                                                }}/>
                                                {item.typeName==='Auction' &&
                                                <div className="centered1" >
                                                    <span className="timefont">{getTimeLeft(item.endDTTM)}</span>
                                                </div>
                                                }
                                            </div>
                                            <div className="wsk-cp-text">
                                                <div className="title-product">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div>
                                                <Link to={item.typeName === 'Auction'? 
                                                `/event/lotDetails/${item.lotId}`:
                                                `/fixedPrice/${item.id}`}
                                                className="theme-btn btnbgco">
                                                    {item.typeName==='Auction'?'Current Bid':'Price'}
                                                    <br/>
                                                    ${parseFloat(item.currentPrice).toFixed(2)}  USD
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                </div>
                            }
                        <button className="right1" onClick={()=>lotLeftScroll()}>
                            <i className="far fa-arrow-alt-circle-right evticon_st"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LastestListings