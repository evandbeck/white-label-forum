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

    const displayCurrentPost = (
      <div className="SubforumItem">
      <Link to={`/posts/${id}/comments`}><p className="postUsername">{name}</p></Link>
      <p className="postDescription">{description}</p>
      <button onClick={handleShowEditor}>EDIT</button>
      <button onClick={() => handlePostDelete(id)}>DELETE</button>
    </div>
    )

    const displayEditPost = (
      <div>
      <EditPost id={id} name={name} description={description} postArray={postArray} setPostArray={setPostArray} setShowEditor={setShowEditor}/>
    </div>
    )

  return (
    <div className="post">
      {showEditor ? displayEditPost : displayCurrentPost}
    </div>
  )
}

export default SubforumItem