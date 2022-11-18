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
                <Link to={`event/${item.ID}`}>{item.Title}</Link>
            </li>
        )}
        </ul>
    )
}

export default LastestAuctions