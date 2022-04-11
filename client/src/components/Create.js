import React, { useState } from 'react'

function Create({ postArray, setPostArray }) {
  const [postTitle, setPostTitle] = useState("")
  const [postContent, setPostContent] = useState("")

  function submitNewPost(e) {
      e.preventDefault();
      const newPost = {
          name: postTitle,
          description: postContent,
          subforum_id: 1,
          user_id: 1
      };
      
    fetch("https://localhost3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
        })

        .then((response) => response.json())
        .then(console.log)
        .then((data) => {
            setPostArray((prev) => [...prev, data]);
        });
    
    setPostTitle("");
    setPostContent("");
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
                <input type="text" value={postContent} onChange={(e) => setPostContent(e.target.value)} size="50"></input>
            </div>
            <div>
                <button>Submit Post</button>
            </div>
        </form>
    </div>
  )
}

export default Create