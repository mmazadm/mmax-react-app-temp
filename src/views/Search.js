import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const SearchPage = () => {
    const location = useLocation()
    const [searchText, setSearchText] = useState(location.search.split('=')[1])
    const [results, setReesults] = useState([])

    
    const getResults = () => {
        axios.get(`/listing/search/0/2?FullTextQuery=${searchText}`)
        .then(res=> {
          console.log(res.data)
          setReesults(res.data)
        })
        .catch()
    }

    useEffect(() => {
        getResults()
        console.log(results)
    }, [])
    
  return (
    <section className="section-padding">
        <div className="container">
            <div className='d-flex'>
                <input type="text" className="form-control" 
                value={searchText}
                name="search"
                placeholder="Search..."
                onChange={(e)=> setSearchText(e.target.value)}/>
                <button onClick={getResults}
                className="btn btn-transparent in-form-btn">
                    <i className="fa fa-search text-secondary"></i>
                </button>
            </div>
        <hr/>
        <p>{searchText}</p>
        </div>
    </section>
  )
}

export default SearchPage