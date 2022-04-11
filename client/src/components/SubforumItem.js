import React from 'react';
import { Link } from 'react-router-dom';

function SubforumItem({ id, name, description, onDelete }) {
  function handlePostEdit() {
    //PATCH DB
    //Update State

  }

  function handlePostDelete(id) {
    //Confirmation?
    fetch(`/posts/${id}`, {
      method: "DELETE",
    })
    // .then(resp => resp.json())
    .then(onDelete(id))
  }

  return (
    <div className="SubforumItem">
      <Link to={`/posts/${id}/comments`}><p className="postUsername">Post Title: {name}</p></Link>
      <p className="postDescription">{description}</p>
      <Link to="/edit"><button>EDIT</button></Link>
      <button onClick={() => handlePostDelete(id)}>DELETE</button>
    </div>
  )
}

export default SubforumItem