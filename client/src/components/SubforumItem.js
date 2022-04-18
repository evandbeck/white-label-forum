import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditPost from './EditPost';

function SubforumItem({ currentUser, id, name, description, user_id, postArray, setPostArray, handleUpdatePost, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)

  function handlePostEdit(updatedPost) {
    fetch(`/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    }).then(resp => resp.json())
      .then(updatedPost => handleUpdatePost(updatedPost))
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

    const displayCurrentPost = (
      <div className="SubforumItem">
      <Link to={`/posts/${id}/comments`}><p className="postUsername">{name}</p></Link>
      <p className="postDescription">{description}</p>

      {currentUser.id === user_id ? (
        <div>
          <button onClick={handleShowEditor}>EDIT</button>
          <button onClick={() => handlePostDelete(id)}>DELETE</button>
        </div>
      ) : null}
    </div>
    )

    const displayEditPost = (
      <div>
      <EditPost 
        id={id} 
        name={name} 
        description={description} 
        postArray={postArray} 
        setPostArray={setPostArray} 
        setShowEditor={setShowEditor} 
        handlePostEdit={handlePostEdit}
      />
    </div>
    )

  return (
    <div className="post">
      {showEditor ? displayEditPost : displayCurrentPost}
    </div>
  )
}

export default SubforumItem