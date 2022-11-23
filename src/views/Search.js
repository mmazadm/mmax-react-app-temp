import React,{useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import d from '../assets/dictionary'

const SearchPage = () => {
    const location = useLocation()
    const [searchText, setSearchText] = useState(location.search.split('=')[1])
    const [results, setResults] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getResults = () => {
        if(searchText!==''){
            setLoading(true)
            axios.get(`/listing/search/0/10?FullTextQuery=${searchText}`)
            .then(res=> {
            console.log(res.data)
            console.log(`for: ${searchText}`)
            setResults(res.data)
            setLoading(false)
            })
            .catch()
        }
    }

    useEffect(() => {
        getResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
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
        { isLoading? <p>Loading...</p> :
            results.List.length > 0 ?
            <ul>
            {results.List.map((item, key) => {
                let link = item.TypeName === 'Auction'? `/events/lot/${item.LotId}`:`/listing/${item.ID}`
            return (
                <li key={key}>
                    <Link to={link}>{item.Title}</Link>
                </li>
            )})}
            </ul>:
            <h4>{d.search.noResultFound}</h4>
        }
        </div>
    </section>
  )
}

export default SearchPage