import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getLotThumbnail, getTimeLeft } from '../../assets/utility'

const Tickr = () => {
  const [endingSoon, setEndingSoon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(`/listing/search/0/5/0?Statuses=active`)
    .then((res)=> {
        setEndingSoon(res.data.List)
        setLoading(false)
    })
    .catch((err) => {
      setEndingSoon([])
      setLoading(false)
    })
  }, [])

  return (
    <div className="py-4 bg-white">
        <div className="container">
          <div className="row">
          {loading || !endingSoon?
              <p>Loading...</p>:
              endingSoon.map((item) => 
              <div key={item.ID} className="col align-items-center">
                  <Link to={`/event/lotDetails/${item.LotId}`}>
                    <div className="d-flex">
                      <img src={getLotThumbnail(item.Media)} 
                      alt={`${item.ID}-img`} 
                      style={{maxHeight:"80px"}}
                      className="me-2"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="/assets/images/placeholder-thumbnail.gif";
                      }}/>
                      <div>
                        {getTimeLeft(item.EndDTTM)}<br/>
                        ${item.CurrentPrice}
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