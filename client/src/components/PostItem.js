import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import EditComment from './EditComment';

function PostItem({ currentUser, id, content, likes, user_id, handleUpdateComment, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)
  const [showLikes, setShowLikes] = useState(true)

  function handleCommentEdit(updatedComment) {
    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedComment),
    }).then(resp => resp.json())
      .then(handleUpdateComment)
  }

  function handleIncrementLikes(id) {
    console.log(id)
    fetch(`/comments/${id}/likes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(resp => resp.json())
      .then(handleUpdateComment)

    setShowLikes(false)
  }

  function handleCommentDelete(id) {
    // Confirmation?
    fetch(`/comments/${id}`, {
      method: "DELETE",
    })
    .then(onDelete(id))
  }

  function handleShowEditor() {
    setShowEditor(showEditor => !showEditor)
    };

  const displayCurrentComment = (
    <div className="PostItem">
      <p>{content}</p>
      {currentUser.id === user_id ? (
        <div>
          <button onClick={handleShowEditor}>EDIT</button>
          <button onClick={() => handleCommentDelete(id)}>DELETE</button>
        </div>
      ) : null}
      {showLikes ? (
        <div>
          <button onClick={() => handleIncrementLikes(id)}>Like</button>
        </div>
      ) : null}
        <p>Likes: {likes}</p>
    </div>
  )

  const displayEditComment = (
    <EditComment 
      id={id} 
      content={content} 
      setShowEditor={setShowEditor} 
      handleCommentEdit={handleCommentEdit}
    />
  )

  return (
    <div className="comment">
      {showEditor ? displayEditComment : displayCurrentComment}
    </div>
  )
}

export default PostItem