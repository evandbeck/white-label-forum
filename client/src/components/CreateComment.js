import React, { useState } from 'react'

function CreateComment({ post_id, commentArray, setCommentArray }) {
  const [commentContent, setCommentContent] = useState("")

  function submitNewComment(e) {
      e.preventDefault();
      const newComment = {
          content: commentContent,
          post_id: post_id,
          // make post_id dynamic
          user_id: 1
      };
      
    fetch("/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
        })

        .then((resp) => resp.json())
        .then(data => console.log(data))
        // Update STATE
        // .then((comment) => {
        //     setCommentArray((prev) => [...prev, comment]);
        // });
    
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
                <button>Submit Comment</button>
            </div>
        </form>
    </div>
  )
}

export default CreateComment