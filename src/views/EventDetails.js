import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import d from '../assets/dictionary'
import Sort from '../components/common/Dropdown'
import { fetchEvent } from '../store/eventSlice'
import { getEventThumbnail, getLotThumbnail, getTimeLeft } from '../assets/utility'
import Loader from '../components/common/Loader'

const EventDetails = () => {
    const { event, isLoading } = useSelector(state=> state.events)
    const dispatch = useDispatch()
    const {eventId, title, breadcrumbs} = useParams()
    const navigate = useNavigate()
    const [browseByCategory, setBrowseByCategory] = useState([])
    const [filter, setFilter] = useState('Active')
    const [sort, setSort] = useState('Ending Soon')
    const sortOptions = ['Ending Soon','Lot Order']
    
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
        console.log('start')
       //if( Object.keys(event).length===0 || event.eventDetail.ID !== eventId)
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
    
    if(isLoading || Object.keys(event).length===0) return <Loader/>
  return (
    <section className="wpo-contact-pg-section section-padding">
        <div className="container">
          {
            <img src={getEventThumbnail(event.eventDetail.secondaryImageURI, event.eventDetail.media, 1)}
            alt="featured-img"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src="/assets/images/placeholder-thumbnail.gif";
            }}
          />}
            <h1>{event.eventDetail.title}</h1>
            <p dangerouslySetInnerHTML={{__html:event.eventDetail.description}}/>
            <p>{d.eventDetails.managedBy}: {event.eventDetail.managedByName}</p>
            <p>{d.eventDetails.status}: {event.eventDetail.status}</p>
            <p>{d.eventDetails.eventId}: {event.eventDetail.id}</p>
            <p>{d.eventDetails.termsAndConditions}: 
              <span dangerouslySetInnerHTML={{__html:event.eventDetail.termsAndConditions}}/>
            </p>
            <p>{d.eventDetails.valueAddesServiceOptions}: 
              <span dangerouslySetInnerHTML={{__html:event.eventDetail.shippingInfo}}/></p>
            <p>{d.eventDetails.starts}: {new Date(`${event.eventDetail.startDTTM}Z`).toLocaleString("en-US",{
                    timeZone: "America/Los_Angeles"
                })} PT
            </p>
            <h4>{d.eventDetails.additionalInfo}</h4>
            <ul>
              {event.eventDetail.properties && event.eventDetail.properties.map(item=>{
                let f_name = item.field.name
                let f_value = item.value
                if(item.value){
                  if(item.field.name.includes('SalesTax')){
                    f_name = 'Sales Tax'
                    f_value = parseInt(f_value)+' %'
                  }
                }
                return(
                <li key={item.id}>
                  {f_name}: {f_value}
                  <hr/>
                </li>)
              })}
            </ul>
            {
            <div className="row">
              <div className="col-3">
                <h6>{d.eventDetails.browseByCategories}</h6>
                  <ul>
                  {browseByCategory.length>1?
                    browseByCategory.map(cat => {
                    if(event.lotCountsByCategory[cat.id])
                      return(
                        <li key={cat.id}>
                          <button onClick={handleSelectCategory}
                          data-id={cat.id}
                          data-name={cat.name}>
                          {cat.name} 
                          <span className="badge rounded-pill bg-secondary">
                            {event.lotCountsByCategory[cat.id]}
                          </span>
                          </button>
                        </li>
                      )
                    else return null
                  }):
                    <li key={0}>
                      <button onClick={()=>navigate(-1)}>{d.eventDetails.goBack}</button>
                    </li>
                  }   
                  </ul>
              </div>
              <div className="col-9">
                <div className="row">
                  <h6>{d.eventDetails.lotFilter}</h6>
                  <nav className="nav btn-group col-3">
                    <button onClick={()=> setFilter('active_only')} 
                    className="btn nav-link" 
                    data-name="Active">
                      {d.eventDetails.active}
                    </button>
                    <button onClick={()=> setFilter('completed_only')} 
                    className="btn nav-link" 
                    data-name="Completed">
                      {d.eventDetails.completed}
                    </button>
                  </nav>
                  <div className="col-9">
                  {d.eventDetails.sort}: <Sort selected={sort} onSelect={setSort} list={sortOptions}/>
                  </div>
                  <hr/>
                </div>

                {event.lots &&
                <ul>
                  {event.lots.map(lot=>(
                    <li className="row">
                      <div className="col-sm-12 col-md-3">
                        <img src={getLotThumbnail(lot.media)} 
                        alt={`${lot.id} img`}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src="/assets/images/placeholder-thumbnail.gif";
                        }}/>
                      </div>
                      <div className="col-sm-12 col-md-9">
                        <span>{d.eventDetails.lot} {lot.lotNumber} - {lot.title}</span>
                        <p>{lot.subtitle}</p>
                        <p>{d.eventDetails.daysRemaining}: {getTimeLeft(lot.endDTTM)}</p>
                        <p>{d.eventDetails.currentBid}: ${parseFloat(lot.currentPrice).toFixed(2)} {lot.currencyCode}</p>
                        <p>{lot.actionCount} {d.eventDetails.bid}</p>
                        <Link to={`/event/lotDetails/${lot.lotId}`} className="btn theme-btn">{d.eventDetails.bidNow}</Link>
                      </div>
                      <hr/>
                    </li>
                  ))}  
                </ul>
                }
              </div>
            </div>
              }
               
        </div>
    </section>
  )
}

export default EventDetails