import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchListings, fetchListingsByCategory } from '../../store/listingSlice'

const LastestListings = () => {
    const { isLoading, listings, categories, currentCategory } = useSelector(state => state.listings)
    const dispatch = useDispatch()

    const handleSelect = (e) => {
        dispatch(fetchListingsByCategory(0,5,e.currentTarget.dataset.id))
    }

    useEffect(() => {
        dispatch(fetchListings(0,5))
      }, [dispatch])

    return(
        <>
        <nav className="nav nav-pills flex-column flex-sm-row">
            {categories.length>0 && categories.map((item) => 
                <button className={`flex-sm-fill text-sm-center nav-link ${item.ID === currentCategory.ID}?'active':''}`}
                data-id = {item.ID}
                data-name = {item.Name}
                onClick={handleSelect}>
                    {item.Name}
                </button>
            )}
        </nav>
        <ul>
        {isLoading || categories.length === 0 || !listings.List?
            <p>Loading...</p>:
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