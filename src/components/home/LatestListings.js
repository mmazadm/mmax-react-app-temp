import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchListings, fetchListingsByCategory } from '../../store/listingSlice'
import Spinner from '../common/Spinner'

const LastestListings = () => {
    const { loadingListings, listings, 
        categoriesWithCount } = useSelector(state => state.listings)
    const dispatch = useDispatch()

    const handleSelect = (e) => {
        const {id} = e.currentTarget.dataset;
        if(id) dispatch(fetchListingsByCategory(0,5, id))
        else dispatch(fetchListings(0,5,1))
    }

    useEffect(() => {
        dispatch(fetchListings(0,5,1))
      }, [dispatch])

    if(!categoriesWithCount.list || categoriesWithCount.list.length === 0) return <Spinner/>
    return(
        <>
        <nav className="nav nav-pills flex-column flex-sm-row">
            <button className='flex-sm-fill text-sm-center nav-link'
                data-id = {null}
                data-name = 'All'
                onClick={handleSelect}>
                    All
            </button>
            {categoriesWithCount.list.map((item) => 
                categoriesWithCount.counts[item.id] &&
                <button className='flex-sm-fill text-sm-center nav-link'
                data-id = {item.id}
                data-name = {item.name}
                key = {item.id}
                onClick={handleSelect}>
                    {item.name}
                    <span className="badge rounded-pill bg-secondary text-center">
                        {categoriesWithCount.counts[item.id]}
                    </span>
                </button>
            )}
        </nav>
        <ul>
        {loadingListings || !listings.list?
            <Spinner/>:
            listings.list.map((item) => 
            <li key={item.id}>
                <Link to={item.TypeName === 'Auction'? 
                `/event/lotDetails/${item.lotId}`:
                `/fixedPrice/${item.id}`}>{item.title}</Link>
            </li>
        )}
        </ul>
        </>
    )
}

export default LastestListings