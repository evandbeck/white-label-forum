import React, { useState } from 'react'

function EditComment({ id, content, setShowEditor, handleCommentEdit }) {
  const [commentContent, setCommentContent] = useState(content)

  function updateComment(e) {
    e.preventDefault();
    const updatedComment = {
        content: commentContent,
      };
    handleCommentEdit(updatedComment);
    setShowEditor(false);
  };

  function handleCancelEdit(e) {
    e.preventDefault();
    setShowEditor(false);
  };

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