import React from 'react'

const Sort = ({selected, onSelect, list, defaultSelection}) => {
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {selected===''?defaultSelection:selected}
  </button>
  <ul className="dropdown-menu">
    {list.map((opt, key) => (
      opt!==selected &&
        <li key={key}>
            <button onClick={onSelect} data-name={opt}>{opt}</button>
        </li>
    ))}
  </ul>
</div>
  )
}

export default Sort