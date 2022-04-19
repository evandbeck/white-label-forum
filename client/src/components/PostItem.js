import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import EditComment from './EditComment';

function PostItem({ currentUser, id, content, likes, user_id, created_at, handleUpdateComment, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)
  const [showLikes, setShowLikes] = useState(true)

  function handleCommentEdit(updatedComment) {
    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedComment),
    })
    .then(resp => resp.json())
    .then(handleUpdateComment)
  }

  function handleIncrementLikes(id) {
    fetch(`/comments/${id}/likes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(resp => resp.json())
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
      <div className="CommentHeader">
        <p>{created_at}</p>
      </div>
      <div className="CommentDetails">
        <div className="UserInfo">
          <p>User Info.</p>
        </div>
        <div className="CommentBody">
          <p>{content}</p>
        </div>
      </div>
      <div className="CommentFooter">
        {currentUser.id === user_id ? (
          <div className="userControls">
            <div className="editBtn">
              <button onClick={handleShowEditor}>EDIT</button>
            </div>
            <div className="deleteBtn">
              <button onClick={() => handleCommentDelete(id)}>DELETE</button>
            </div>
          </div>
        ) : null}
          <div className="likes">
            {showLikes ? (
              <div className="likeBtn">
                <button onClick={() => handleIncrementLikes(id)}>Like</button>
              </div>
            ) : null}
              <div className="currentLikes">
                <p>Likes: {likes}</p>
              </div>
          </div>
      </div>
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