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

    if(!categoriesWithCount.List || categoriesWithCount.List.length === 0) return <p>Loading...</p>
    return(
        <>
        <nav className="nav nav-pills flex-column flex-sm-row">
            <button className='flex-sm-fill text-sm-center nav-link'
                data-id = {null}
                data-name = 'All'
                onClick={handleSelect}>
                    All
            </button>
            {categoriesWithCount.List.map((item) => 
                categoriesWithCount.counts[item.ID] &&
                <button className='flex-sm-fill text-sm-center nav-link'
                data-id = {item.ID}
                data-name = {item.Name}
                onClick={handleSelect}>
                    {item.Name}
                    <span className="badge rounded-pill bg-secondary text-center">
                        {categoriesWithCount.counts[item.ID]}
                    </span>
                </button>
            )}
        </nav>
        <ul>
        {loadingListings || !listings.List?
            <Spinner/>:
            listings.List.map((item, key) => 
            <li key={item.ID}>
                <Link to={item.TypeName === 'Auction'? 
                `/event/lotDetails/${item.LotId}`:
                `/fixedPrice/${item.ID}`}>{item.Title}</Link>
            </li>
        )}
        </ul>
        </>
    )
}

export default LastestListings