import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function CreatePost({ id, postArray, setPostArray, handleNewPost }) {
  const [postTitle, setPostTitle] = useState("")
  const [postDescription, setPostContent] = useState("")
  const [toForum, setToForum] = useState(false)
  
  if (toForum === true) { 
    return <Redirect to="/"/>
  }

  function submitNewPost(e) {
      e.preventDefault();
      const newPost = {
          name: postTitle,
          description: postDescription,
          // subforum_id: id,
          user_id: 1
      };
      
    fetch('/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
        })
        .then((response) => response.json())
        .then(console.log)
        // Update STATE
        
    handleNewPost(newPost);
    setPostTitle("");
    setPostContent("");
    setToForum(true);
  }

  return (
    <div className="newContent">
        <form onSubmit={submitNewPost}>
            <div>
                <label>Post Title:</label>
                <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Post Content:</label>
                <input type="text" value={postDescription} onChange={(e) => setPostContent(e.target.value)} size="50"></input>
            </div>
            <div>
                <button>Submit Post</button>
            </div>
        </form>
    </div>
  )
}

export default CreatePost