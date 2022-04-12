import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EditComment from './EditComment';

function PostItem({ id, content, post_id, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)

  function handleCommentDelete(id) {
    //Confirmation?
    fetch(`/comments/${id}`, {
      method: "DELETE",
    })
    // .then(resp => resp.json())
    .then(onDelete(id))
  }

  function handleShowEditor() {
    setShowEditor(showEditor => !showEditor)
    };

  return (
    <div className="PostItem">
      <p>{content}</p>
      <button onClick={handleShowEditor}>{showEditor ? "Close Editor" : "EDIT"}</button>
      {showEditor ? <EditComment id={id} content={content}/> : null}
      <button onClick={() => handleCommentDelete(id)}>DELETE</button>
    </div>
  )
}

export default PostItem