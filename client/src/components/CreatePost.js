import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function CreatePost({ currentUser, subforum_id, postArray, setPostArray, setShowCreatePost, handleNewPost }) {
  const [postTitle, setPostTitle] = useState("")
  const [postDescription, setPostContent] = useState("")
//   const [toForum, setToForum] = useState(false)
  
//   if (toForum === true) { 
//     return <Redirect to="/"/>
//   }

  function submitNewPost(e) {
      e.preventDefault();
      const newPost = {
          name: postTitle,
          description: postDescription,
          subforum_id: subforum_id,
          user_id: currentUser.id
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
        
    handleNewPost(newPost);
    setPostTitle("");
    setPostContent("");
    setShowCreatePost(false);
    // setToForum(true);
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
                <textarea type="text" value={postDescription} onChange={(e) => setPostContent(e.target.value)} size="50"></textarea>
            </div>
            <div>
                <button>Submit Post</button>
            </div>
        </form>
    </div>
  )
}

export default CreatePost