import React from 'react'

function Subforum({ name, category, description}) {
  return (
    <div className="Subforum">
        <div>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Subforum