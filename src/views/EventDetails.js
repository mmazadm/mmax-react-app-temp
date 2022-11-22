import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchEvent } from '../store/eventSlice'

const EventDetails = () => {
    const { event, isLoading } = useSelector(state=> state.events)
    const { categoriesWithCount } = useSelector(state=> state.listings)
    const dispatch = useDispatch()
    const {eventId} = useParams()

    useEffect(()=> {
        console.log(typeof event.eventDetail==='undefined')
       if( typeof event.eventDetail==='undefined' || event.eventDetail.ID !== eventId)
          dispatch(fetchEvent(eventId,0,0,'active',null))
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
                })} PT
            </p>
            <h4>Additional Information</h4>
            <ul>
              { event.eventDetail.Properties.map(item=>{
                let f_name = item.Field.Name
                let f_value = item.Value
                if(item.Value){
                  if(item.Field.Name.includes('SalesTax')){
                    f_name = 'Sales Tax'
                    f_value = parseInt(f_value)+' %'
                  }
                }
                return(
                <li key={item.ID}>
                  {f_name}: {f_value}
                  <hr/>
                </li>)
              })}
            </ul>
            <div className="row">
              <div className="col-3">
                <h6>Browse By Categories</h6>
                <ul>
                {categoriesWithCount.List.map(cat => {
                  if(event.lotCountsByCategory[cat.ID])
                    return(
                      <li>{cat.Name} 
                        <span className="badge rounded-pill bg-secondary">
                          {event.lotCountsByCategory[cat.ID]}
                        </span>
                      </li>
                    )
                  else return null
                })}   
                </ul>
              </div>
              <div className="col-9">
                <h6>Lot filters</h6>
                {event.lots &&
                <ul>
                  {event.lots.map(lot=>(
                    <li>
                      <span>Lot {lot.LotNumber} - {lot.Title}</span>
                      <p>{lot.Subtitle}</p>
                      <p>Days Remaining:</p>
                      <p>Current Bid: ${parseFloat(lot.CurrentPrice).toFixed(2)} {lot.CurrencyCode}</p>
                      <p>{lot.ActionCount} Bid(s)</p>
                      <Link to={`/event/lotDetails/${lot.LotId}`} className="btn theme-btn">Bid Now</Link>
                      <hr/>
                    </li>
                  ))}  
                </ul>
                }
              </div>
            </div>

               
        </div>
    </section>
  )
}

export default EventDetails