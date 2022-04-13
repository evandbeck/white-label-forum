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
    <div className="postEditor">
      <form onSubmit={handleSubmitEditPost}>
            <div>
                <label>Post Title:</label>
                <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Post Content:</label>
                <textarea type="text" value={postDescription} onChange={(e) => setPostDescription(e.target.value)} size="50"></textarea>
            </div>
            <div>
                <button>Update Post</button>
                <button onClick={(e) => handleCancelEdit(e)}>Cancel Edit</button>
            </div>
        </form>
    </div>
  )
}


export default EditPost