import React, { useState } from 'react'

function EditPost({ id, name, description, postArray, setPostArray }) {
  const [postTitle, setPostTitle] = useState(name)
  const [postDescription, setPostDescription] = useState(description)

  function updatePost(e) {
    e.preventDefault();
    const updatedPost = {
          name: postTitle,
          description: postDescription,
      };
    //PATCH Request to DB
    fetch(`/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    //Update State
    .then(setPostArray)
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
                <button>Update Post</button>
            </div>
        </form>
    </div>
  )
}


export default EditPost