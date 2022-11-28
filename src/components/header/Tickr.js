import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getLotThumbnail, getTimeLeft } from '../../assets/utility'
import Spinner from '../common/Spinner'

const Tickr = () => {
  const [endingSoon, setEndingSoon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(`/listing/search/0/5/0?Statuses=active`)
    .then((res)=> {
        setEndingSoon(res.data.list)
        setLoading(false)
    })
    .catch(() => {
      setEndingSoon([])
      setLoading(false)
    })
  }, [])

  return (
    <div className="py-4 bg-white">
        <div className="container">
          <div className="row">
          {loading || !endingSoon?
              <Spinner/>:
              endingSoon.map((item) => 
              <div key={item.id} className="col align-items-center">
                  <Link to={`/event/lotDetails/${item.lotId}`}>
                    <div className="d-flex">
                      <img src={getLotThumbnail(item.media)} 
                      alt={`${item.id}-img`} 
                      style={{maxHeight:"80px"}}
                      className="me-2"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="/assets/images/placeholder-thumbnail.gif";
                      }}/>
                      <div>
                        {getTimeLeft(item.endDTTM)}<br/>
                        ${item.currentPrice}
                      </div>
                    </div>
                  </Link>
              </div>
          )}
          </div>
        </div>
    </div>
  )
}

export default Tickr