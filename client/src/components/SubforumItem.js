import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Edit from './Edit';

function SubforumItem({ id, name, description, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)
  
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

  function handleShowEditor() {
    setShowEditor(showEditor => !showEditor)
    };

  return (
    <div className="SubforumItem">
      <Link to={`/posts/${id}/comments`}><p className="postUsername">Post Title: {name}</p></Link>
      <p className="postDescription">{description}</p>
      <button onClick={handleShowEditor}>{showEditor ? "Close Editor" : "EDIT"}</button>
      {showEditor ? <Edit id={id} name={name} desfription={description}/> : null}
      <button onClick={() => handlePostDelete(id)}>DELETE</button>
    </div>
  )
}

export default SubforumItem