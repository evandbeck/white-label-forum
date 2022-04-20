import React, { useState } from 'react'

function EditPost({ id, name, description, postArray, setPostArray, setShowEditor, handlePostEdit }) {
  const [postTitle, setPostTitle] = useState(name)
  const [postDescription, setPostDescription] = useState(description)

  function handleSubmitEditPost(e) {
    e.preventDefault();
    const updatedPost = {
          name: postTitle,
          description: postDescription
      };
    handlePostEdit(updatedPost);
    setShowEditor(false);
  }

    function handleCancelEdit(e) {
      e.preventDefault();
      setShowEditor(false);
    }

  return (
    <div className="PostCommentEditor">
      <form onSubmit={handleSubmitEditPost}>
            <div className="txt_field">
                <input type="text" required maxlength="30" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
                <span></span>
                <label>Post Title</label>
            </div>
            <div className="txt_field">
                <input type="text" required maxlength="100" value={postDescription} onChange={(e) => setPostDescription(e.target.value)} size="50"/>
                <span></span>
                <label>Post Content</label>
            </div>
            <div className="EditSubmit">
                <button>Update Post</button>
                <button onClick={(e) => handleCancelEdit(e)}>Cancel Edit</button>
            </div>
        </form>
    </div>
  )
}


export default EditPost