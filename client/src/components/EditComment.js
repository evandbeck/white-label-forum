import React, { useState } from 'react'

function EditComment({ id, content, setShowEditor }) {
  const [commentContent, setCommentContent] = useState(content)

  function updateComment(e) {
    e.preventDefault();
    const updatedComment = {
        content: commentContent,
      };
  //PATCH Request to DB
  fetch(`/comments/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedComment),
  })
    .then(resp => resp.json())
    .then(data => console.log(data))
  //Update State
}

function handleCancelEdit(e) {
  e.preventDefault();
  setShowEditor(false);
}

  return (
    <div className="commentEditor">
      <form onSubmit={updateComment}>
            <div>
                <label>Post Content:</label>
                <input type="text" value={commentContent} onChange={(e) => setCommentContent(e.target.value)} size="50"></input>
            </div>
            <div>
                <button>Update Comment</button>
                <button onClick={(e) => handleCancelEdit(e)}>Cancel Edit</button>
            </div>
        </form>
    </div>
  )
}

export default EditComment