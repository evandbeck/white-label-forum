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
    <div className="PostCommentEditor">
      <form onSubmit={updateComment}>
            <div className="txt_field">
                <input type="text" required maxlength="100" value={commentContent} onChange={(e) => setCommentContent(e.target.value)} size="50"/>
                <span></span>
                <label>Post Content</label>
            </div>
            <div className="EditSubmit">
                <button>Update Comment</button>
                <button onClick={(e) => handleCancelEdit(e)}>Cancel Edit</button>
            </div>
        </form>
    </div>
  )
}

export default EditComment