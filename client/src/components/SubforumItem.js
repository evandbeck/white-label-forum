import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditPost from './EditPost';

function SubforumItem({ id, name, description, postArray, setPostArray, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)

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
      {showEditor ? <EditPost id={id} name={name} description={description} postArray={postArray} setPostArray={setPostArray}/> : null}
      <button onClick={() => handlePostDelete(id)}>DELETE</button>
    </div>
  )
}

export default SubforumItem