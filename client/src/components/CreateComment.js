import React, { useState } from 'react'

function CreateComment({ currentUser, post_id, commentArray, setCommentArray, setShowCreateComment, handleNewComment }) {
  const [commentContent, setCommentContent] = useState("")

  function submitNewComment(e) {
    e.preventDefault();
      const newComment = {
          content: commentContent,
          likes: 0,
          post_id: post_id,
          user_id: currentUser.id
      };
      
    fetch("/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
        })
        .then((resp) => resp.json())
        .then(data => console.log(data));
        // Update STATE
        
    handleNewComment(newComment);
    setCommentContent("");
    setShowCreateComment(false);
  }

  return (
    <div className="CreateNew">
        <form onSubmit={submitNewComment}>
            <div className="txt_field">
                <input type="text" required maxlength="100" value={commentContent} onChange={(e) => setCommentContent(e.target.value)} size="50"/>
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

export default CreateComment