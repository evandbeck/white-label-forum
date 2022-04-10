import React from 'react'

function Subforum({ id, name, category, description}) {

  function getSubforums(id) {
    fetch(`/subforum/${id}`)
    .then(resp => resp.json())
    .then(console.log)
  }

  function showSubforumsPosts(id) {
    console.log(id)
    // GET All Posts whose subforum_id = id
    // getSubforums(id);
    // Render All Posts
  }

  return (
    <div className="Subforum" onClick={() => showSubforumsPosts(id)}>
            <p>{name}</p>
            <p>{description}</p>
    </div>
  )
}

export default Subforum