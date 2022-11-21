import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchEventList } from '../../store/eventSlice'

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
        {eventList.List.map((item, key) => 
            <li key={key}>
                <img src={`/${item.PrimaryImageURI}`} alt={`${item.ID} img`}/>
                <p><Link to={`event/${item.ID}`}>{item.Title}</Link></p>
                <p dangerouslySetInnerHTML={{__html: item.Description}}/>
                <p>First Lot closes on: {new Date(`${item.EndDTTM}Z`).toLocaleString("en-US",{
                    timeZone: "America/Los_Angeles"
                })} PT</p>
                <Link to={`event/${item.ID}`} className="btn theme-btn">View All Lots ({item.LotCount})</Link>
                <hr/>
            </li>
        )}
        </ul>
    )
}

export default LastestAuctions