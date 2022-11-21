import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchEvent } from '../store/eventSlice'

const EventDetails = () => {
    const { event, isLoading } = useSelector(state=> state.events)
    const dispatch = useDispatch()
    const {eventId} = useParams()

    useEffect(()=>{
        dispatch(fetchEvent(eventId,0,0,'all',null))
        console.log(event)
    },[])

    if(isLoading || Object.keys(event).length===0) return <p>Loading...</p>
  return (
    <section className="wpo-contact-pg-section section-padding">
        <div className="container">
            <img scr={event.eventDetail.SecondaryImageURI} alt="featured-img"/>
            <h1>{event.eventDetail.Title}</h1>
            <p dangerouslySetInnerHTML={{__html:event.eventDetail.Description}}/>
            <p>Managed By: {event.eventDetail.ManagedByName}</p>
            <p>Status: {event.eventDetail.Status}</p>
            <p>Event ID: {event.eventDetail.ID}</p>
            <p>Terms and Conditions: {event.eventDetail.TermsAndConditions}</p>
            <p>Value added service Options: {event.eventDetail.ShippingInfo}</p>
            <p>Starts: {new Date(`${event.eventDetail.EndDTTM}Z`).toLocaleString("en-US",{
                    timeZone: "America/Los_Angeles"
                })} PT</p>
        </div>
    </section>
  )
}

export default EventDetails