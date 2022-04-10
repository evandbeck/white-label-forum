import React from 'react'

function SubforumItem({ id, name, description }) {
  return (
    <div className="SubforumItem">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  )
}

export default SubforumItem