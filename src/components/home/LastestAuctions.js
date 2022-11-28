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

    if(isLoading)
        return <Spinner/>
    return(
        <ul>
        {eventList.list.map((item, key) => {
            return(
            <li key={key} className="row">
                <div className="col-sm-12 col-md-3">
                <img src={getEventThumbnail(item.primaryImageURI, item.media, 0)}
                alt={`${item.id} img`}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="/assets/images/placeholder-thumbnail.gif";
                  }}/>
                </div>
                <div className="col-sm-12 col-md-9">
                    <p><Link to={`event/details/${item.id}/${item.title}`}>{item.title}</Link></p>
                    <p dangerouslySetInnerHTML={{__html: item.subtitle}}/>
                    <p>Ending: {getTimeLeft(item.endDTTM)}</p>
                    <p>First Lot closes on: {new Date(`${item.endDTTM}Z`).toLocaleString("en-US",{
                        timeZone: "America/Los_Angeles"
                    })} PT</p>
                    <Link to={`event/details/${item.id}/${item.title}`} className="btn theme-btn">{d.latestauctions.viewAllLots} ({item.lotCount})</Link>
                </div>
                <hr className="my-2"/>
            </li>
            )
        }
        )}
        </ul>
    )
}

export default LastestAuctions