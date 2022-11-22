import React from 'react'

const Sort = ({selected, onSelect}) => {
    const sortOptions = ['Ending Soon','Lot Order']
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {selected}
  </button>
  <ul className="dropdown-menu">
    {sortOptions.map((opt, key) => (
        <li key={key}>
            {opt}
        </li>
    ))}
  </ul>
</div>
  )
}

export default Sort