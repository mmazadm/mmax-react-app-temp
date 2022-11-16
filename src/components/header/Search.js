import React, { useState } from 'react'

const Search = () => {
    const [searchText, setSearchText] = useState('')
  return (
    <div className="input-group-sm">
        <input type="text" className="form-control" 
        value={searchText}
        name="search"
        placeholder="Search..."
        onChange={(e)=> setSearchText(e.target.value)}/>
    </div>
  )
}

export default Search