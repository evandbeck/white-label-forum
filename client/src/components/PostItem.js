import React from 'react'
import { Link } from 'react-router-dom';

function PostItem({ id, content, post_id, onDelete }) {

  function handleCommentDelete(id) {
    //Confirmation?
    fetch(`/comments/${id}`, {
      method: "DELETE",
    })
    // .then(resp => resp.json())
    .then(onDelete(id))
  }

  return (
    <div className="PostItem">
      <p>{content}</p>
      <Link to="/edit"><button>EDIT</button></Link>
      <button onClick={() => handleCommentDelete(id)}>DELETE</button>
    </div>
  )
}

export default PostItem