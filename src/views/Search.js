import React,{useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import d from '../assets/dictionary'
import Loader from '../components/common/Loader'
import { useSelector } from 'react-redux'
import Sort from '../components/common/Sort'

const SearchPage = () => {
    const location = useLocation()
    const searchText = location.search.split('=')[1]
    const [results, setResults] = useState([])
    const [isLoading, setLoading] = useState(true)
    const[error, setError] = useState(false)
    const [listingType, setListingType] = useState('')
    const [statusFilter, setStatusFilter] = useState('active_only')
    const [sortOpt, setSortOpt] = useState(0)
    const {listingTypes} = useSelector(state=> state.listings)

    const getResults = () => {
        if(searchText!==''){
            setError(false)
            setLoading(true)
            let type = ''
            if(listingType!=='All') type = listingType.replace(' ','')
            let status = 'active_only'
            if(status === 'Completed') status = 'completed_only'
            axios.get(`/listing/search/0/10?FullTextQuery=${searchText}
            &ListingType=${type}
            &StatusFilter=${statusFilter}
            &SortFilterOptions=${sortOpt}`)
            .then(res=> {
                console.log(res.data)
                setResults(res.data)
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
                setError(true)
                setLoading(false)
            })
        } else setLoading(false)
    }


    useEffect(() => {
        setError(false)
        getResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location.search, listingType, statusFilter, sortOpt])
    
  return (
    <section className="section-padding">
        <div className="container">
            <div className='d-flex'>
                <Sort selected={listingType} 
                onSelect={(e)=>setListingType(e.currentTarget.dataset.name)}
                defaultelection='All' 
                list={listingTypes}/>
            </div>
        </div>
        <hr/>
        { isLoading? <Loader/> :
            error? <p className='text-danger'>Unable to fetch results. Please try again</p>
            :results.List && results.List.length > 0 ?
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
    </section>
  )
}

export default SearchPage