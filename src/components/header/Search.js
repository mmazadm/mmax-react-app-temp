import React, { useEffect, useState } from 'react'

const Search = () => {
    const [searchText, setSearchText] = useState('')

    useEffect(()=>{
      const keydownhandler = (e) => {
        if(e.key === 'Enter'){
          e.preventDefault()
          window.location.href= `/search?fullTextQuery=${searchText}`
        }
      }
      document.addEventListener('keydown', keydownhandler)
      return () => {
        document.removeEventListener('keydown', keydownhandler)
      }
    },[searchText])

  return (
    <div className="d-flex">
        <input type="text" className="form-control" 
        value={searchText}
        name="search"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}/>
        <a href={`/search?fullTextQuery=${searchText}`}
        className="btn btn-transparent in-form-btn">
            <i className="fa fa-search text-secondary"></i>
        </a>
    </div>
  )
}

export default Search
