import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import d from '../../assets/dictionary'
import { fetchEventList } from '../../store/eventSlice'
import { getEventThumbnail } from '../../assets/utility'

const LastestAuctions = () => {
    const { isLoading, eventList } = useSelector(state => state.events)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEventList())
      }, [dispatch])

    if(isLoading)
        return <p>Loading...</p>
    return(
        <ul>
        {eventList.List.map((item, key) => {
            return(
            <li key={key} className="row">
                <div className="col-sm-12 col-md-3">
                <img src={getEventThumbnail(item.PrimaryImageURI, item.Media, 0)} alt={`${item.ID} img`}/>
                </div>
                <div className="col-sm-12 col-md-9">
                    <p><Link to={`event/details/${item.ID}/${item.Title}`}>{item.Title}</Link></p>
                    <p dangerouslySetInnerHTML={{__html: item.Description}}/>
                    <p>First Lot closes on: {new Date(`${item.EndDTTM}Z`).toLocaleString("en-US",{
                        timeZone: "America/Los_Angeles"
                    })} PT</p>
                    <Link to={`event/details/${item.ID}/${item.Title}`} className="btn theme-btn">{d.latestauctions.viewAllLots} ({item.LotCount})</Link>
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