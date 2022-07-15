import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';

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
        .then((data) => {
          handleNewPost(data);
          setPostTitle("");
          setPostContent("");
          setShowCreatePost(false);
         });
  }

  return (
    <div className="CreateNew">
        <form onSubmit={submitNewPost}>
            <div className="txt_field">
                <input type="text" required maxLength="30" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
                <span></span>
                <label>Post Title</label>
            </div>
            <div className="txt_field">
                <input type="text" required maxLength="100" value={postDescription} onChange={(e) => setPostContent(e.target.value)} size="50"/>
                <span></span>
                <label>Post Content</label>
            </div>
            <div className="CreateNewSubmit">
                <button>Submit Post</button>
            </div>
        </form>
    </div>
  )
}

export default CreatePost