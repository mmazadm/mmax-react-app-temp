import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import d from '../../assets/dictionary'
import { fetchEventList } from '../../store/eventSlice'
import { getEventThumbnail, getTimeLeft } from '../../assets/utility'
import Spinner from '../common/Spinner'

const LastestAuctions = () => {
    const { isLoading, eventList } = useSelector(state => state.events)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEventList())
      }, [dispatch])

    const rightScroll2 = () => {
        const right2 = document.querySelector(".scroll-images2");
        right2.scrollBy(-200, 0);
    }

    const leftScroll2 = () => {
        const left2 = document.querySelector(".scroll-images2");
        left2.scrollBy(200, 0);  
    }

    if(isLoading || !eventList.list)
        return <Spinner/>
    return(
        <div className="cover2">
            <button className="left2" onClick={()=>rightScroll2()}>
                <i  className="far fa-arrow-alt-circle-left evticon_st"></i>
            </button>
            <div className="row scroll-images2">
                {eventList.list && eventList.list.map((item) => {
                    return(
                        <div class="col-lg-3 col-md-4 evt_card" key={item.id}>
                            <div class="wsk-cp-product1" >
                                <div className="wsk-cp-img  catheight evtcont">
                                    <img src={getEventThumbnail(item.primaryImageURI, item.media, 0)}
                                    alt={`${item.id} img`}
                                    className="img-responsive imgwid"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src="/assets/images/placeholder-thumbnail.gif";
                                    }}/>

                                    <div className="centered21">
                                        <span>{getTimeLeft(item.endDTTM)}</span>
                                    </div>
                                </div>
                                <div className="wsk-cp-text eventbg">
                                    <div className="title-product evt">
                                        <div className="evtitle">
                                            {item.title}
                                            <hr className="hrfield" /><br/>
                                            <span className="lotclose-desk">
                                                First Lot closes on: {new Date(`${item.endDTTM}Z`).toLocaleString("en-US",{
                                                timeZone: "America/Los_Angeles"
                                                })} PT
                                            </span>
                                            <span className="lotclose-mob">
                                                First Lot closes on: {new Date(`${item.endDTTM}Z`).toLocaleString("en-US",{
                                                timeZone: "America/Los_Angeles"
                                                })} PT
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={`event/details/${item.id}/${item.title}`}
                                            className="theme-btn btnbgco21">
                                            {d.latestauctions.viewAllLots} ({item.lotCount})
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <button class="right2" onClick={()=>leftScroll2()}>
                <i  class="far fa-arrow-alt-circle-right evticon_st"></i>
          </button>
        </div>
    )
}

export default LastestAuctions