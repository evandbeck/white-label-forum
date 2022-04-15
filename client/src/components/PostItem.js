import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import EditComment from './EditComment';

function PostItem({ id, content, handleUpdateComment, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)

  function handleCommentEdit(updatedComment) {
    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedComment),
    }).then(resp => resp.json())
      .then(updatedComment => handleUpdateComment(updatedComment))
  }

  function handleCommentDelete(id) {
    // Confirmation?
    fetch(`/comments/${id}`, {
      method: "DELETE",
    })
    // .then(resp => resp.json())
    .then(onDelete(id))
  }

  function handleShowEditor() {
    setShowEditor(showEditor => !showEditor)
    };

  const displayCurrentComment = (
    <div className="PostItem">
      <p>{content}</p>
      <button onClick={handleShowEditor}>EDIT</button>
      <button onClick={() => handleCommentDelete(id)}>DELETE</button>
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