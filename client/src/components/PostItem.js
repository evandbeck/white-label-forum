import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import EditComment from './EditComment';

function PostItem({ id, content, post_id, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)

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
    <EditComment id={id} content={content} setShowEditor={setShowEditor}/>
  )

  return (
    <div className="comment">
      {showEditor ? displayEditComment : displayCurrentComment}
    </div>
  )
}

export default PostItem