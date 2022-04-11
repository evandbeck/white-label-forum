import React, { useState } from 'react'

function CreateComment() {
  const [commentContent, setCommentContent] = useState("")

  function submitNewComment(e) {
      e.preventDefault();
      const newComment = {
          content: commentContent,
          post_id: 1,
          user_id: 1
      };
      
    fetch("/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
        })

        .then((response) => response.json())
        .then(console.log)
        .then((data) => {
            setCommentContent((prev) => [...prev, data]);
        });
    
    setCommentContent("");
  }

  return (
    <div className="newContent">
        <form onSubmit={submitNewComment}>
            <div>
                <label>Post Content:</label>
                <input type="text" value={commentContent} onChange={(e) => setCommentContent(e.target.value)} size="50"></input>
            </div>
            <div>
                <button>Submit Post</button>
            </div>
        </form>
    </div>
  )
}

export default CreateComment