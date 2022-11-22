import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Sort from '../components/common/Sort'
import { fetchEvent } from '../store/eventSlice'

const EventDetails = () => {
    const { event, isLoading } = useSelector(state=> state.events)
    const dispatch = useDispatch()
    const {eventId, title, breadcrumbs} = useParams()
    const navigate = useNavigate()
    const [browseByCategory, setBrowseByCategory] = useState([])
    const [filter, setFilter] = useState('Active')
    const [sort, setSort] = useState('Ending Soon')

    const handleSelectCategory = (e) => {
      e.preventDefault()
      let {id, name}  = e.currentTarget.dataset
      let b_crumbs = ''
      if(breadcrumbs){
        b_crumbs = breadcrumbs+'-C'+id
      }
      else {
        b_crumbs = 'C'+id
      }
      navigate(`/event/details/${eventId}/${title}/${b_crumbs}/${name}`)
    }

    useEffect(()=> {
        console.log(event)
       if( typeof event.eventDetail==='undefined' || event.eventDetail.ID !== eventId)
          dispatch(fetchEvent(eventId,0,0,'active',null, '', filter, sort))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
      let selected = 9
      if(breadcrumbs) {
        let categoryArray = breadcrumbs.replace('C','').split('-')
        selected = categoryArray[categoryArray.length-1].replace('C','')
      }
      axios.get(`/category/children/${selected}`)
      .then(res=> {
        setBrowseByCategory(res.data)
      })
      dispatch(fetchEvent(eventId,0,0,'active', null, breadcrumbs?breadcrumbs:'', filter, sort))
    }, [breadcrumbs, dispatch, eventId, filter, sort])
    

    if(isLoading || Object.keys(event).length===0) return <p>Loading...</p>
  return (
    <section className="wpo-contact-pg-section section-padding">
        <div className="container">
            {event.eventDetail.SecondaryImageURI && <img src={event.eventDetail.SecondaryImageURI} alt="featured-img"/>}
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
                  {browseByCategory.length>1?
                    browseByCategory.map(cat => {
                    if(event.lotCountsByCategory[cat.ID])
                      return(
                        <li key={cat.ID}>
                          <button onClick={handleSelectCategory}
                          data-id={cat.ID}
                          data-name={cat.Name}>
                          {cat.Name} 
                          <span className="badge rounded-pill bg-secondary">
                            {event.lotCountsByCategory[cat.ID]}
                          </span>
                          </button>
                        </li>
                      )
                    else return null
                  }):
                    <li key={0}>
                      <button onClick={()=>navigate(-1)}>Go back</button>
                    </li>
                  }   
                  </ul>
              </div>
              <div className="col-9">
                <div className="row">
                  <h6>Lot filters</h6>
                  <nav className="nav btn-group col-3">
                    <button onClick={()=> setFilter('active_only')} 
                    className="btn nav-link" 
                    data-name="Active">
                      Active
                    </button>
                    <button onClick={()=> setFilter('completed_only')} 
                    className="btn nav-link" 
                    data-name="Completed">
                      Completed
                    </button>
                  </nav>
                  <div className="col-9">
                  Sort: <Sort selected={sort} onSelect={setSort}/>
                  </div>
                  <hr/>
                </div>

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