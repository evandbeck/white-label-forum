import React, { useState } from 'react'

function Edit({ id, name, description}) {
  const [postTitle, setPostTitle] = useState("")
  const [postDescription, setPostDescription] = useState("")

  function updatePost(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={updatePost}>
            <div>
                <label>Post Title:</label>
                <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Post Content:</label>
                <input type="text" value={postDescription} onChange={(e) => setPostDescription(e.target.value)} size="50"></input>
            </div>
            <div>
                <button>Submit Post</button>
            </div>
        </form>
    </div>
  )
}

export default Edit