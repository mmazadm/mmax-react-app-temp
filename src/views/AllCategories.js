import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategoryListWithCounts } from '../store/listingSlice'

const AllCategories = () => {
    const {categoriesWithCount} = useSelector(state=> state.listings)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!categoriesWithCount.List === 0){
            dispatch(fetchCategoryListWithCounts())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    if(!categoriesWithCount.List) return <p>Loading...</p>
  return (
    <section className="wpo-contact-pg-section section-padding" >
        <div className='container'>
            <ul>
                {categoriesWithCount.List.map(item=>(
                    <li key={item.ID}>
                        {item.Name}
                        <span className="badge rounded-pill bg-secondary">
                            {categoriesWithCount.counts[item.ID]}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        
    </section>
  )
}

export default AllCategories