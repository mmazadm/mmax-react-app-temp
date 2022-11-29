import React,{useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import d from '../assets/dictionary'
import Loader from '../components/common/Loader'
import { useSelector } from 'react-redux'
import Dropdown from '../components/common/Dropdown'

const SearchPage = () => {
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search);
    const searchText = urlParams.get('fullTextQuery')
    const [results, setResults] = useState([])
    const [isLoading, setLoading] = useState(true)
    const[error, setError] = useState(false)
    const [listingType, setListingType] = useState('All')
    const [statusFilter, setStatusFilter] = useState('Active')
    const [sortOpt, setSortOpt] = useState('Newest')
    const {listingTypes} = useSelector(state=> state.listings)
    const sortOpts=['Newest', 'Ending Soon']

    const getResults = () => {
        if(searchText!==''){
            setError(false)
            setLoading(true)
            let type = ''
            if(listingType!=='All') type = listingType.replace(' ','')
            let status = 'active_only'
            if(status === 'Completed') status = 'completed_only'
            let sort = 0;
            switch(sortOpt){
                case 'Ending Soon': sort = 0;
                break;
                case 'Newest': sort = 1;
                break;
                default: sort = 0;
            }
            axios.get(`/listing/search/0/10/${sort}?FullTextQuery=${searchText}&ListingType=${type}&Statuses=${statusFilter}`)
            .then(res=> {
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
            <div className='d-flex align-items-center'>
            <label className="me-2">Listing Type</label>
            <Dropdown selected={listingType} 
            onSelect={(e)=>setListingType(e.currentTarget.dataset.name)}
            list={listingTypes}/>
            <label className="mx-2">Sort</label>
            <Dropdown selected={sortOpt} 
            onSelect={(e)=>setSortOpt(e.currentTarget.dataset.name)}
            list={sortOpts}/>
            <div className="btn-group ms-4">
                <button onClick={()=> setStatusFilter('Active')} 
                className={`btn btn-primary ${statusFilter==='Active'?'active':''}`} 
                aria-current="page">Active</button>
                <button onClick={()=> setStatusFilter('Ended')} 
                className={`btn btn-primary ${statusFilter==='Ended'?'active':''}`} 
                aria-current="page">Completed</button>
            </div>
            </div>
        </div>
        <hr/>
        { isLoading? <Loader/> :
            error? <p className='text-danger'>Unable to fetch results. Please try again</p>
            :results.list && results.list.length > 0 ?
            <ul>
            {results.list.map((item, key) => {
                let link = item.TypeName === 'Auction'? `/events/lot/${item.lotId}`:`/listing/${item.id}`
            return (
                <li key={key}>
                    <Link to={link}>{item.title}</Link>
                </li>
            )})}
            </ul>:
            <h4>{d.search.noResultFound}</h4>
        }
    </section>
  )
}

export default SearchPage