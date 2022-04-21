import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import EditComment from './EditComment';

function PostItem({ currentUser, id, content, likes, user_id, created_at, user, handleUpdateComment, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)
  const [showLikes, setShowLikes] = useState(true)

  let date = new Date(created_at);

  let commentCreatedAt = (
    date.getMonth()+1+
    "/"+date.getDate()+
    "/"+date.getFullYear()
    // " "+date.getHours()+
    // ":"+date.getMinutes()+
    // ":"+date.getSeconds()
  );

  let joinDate = new Date(user.created_at);

  let userJoinDate = (
    joinDate.getMonth()+1+
    "/"+joinDate.getDate()+
    "/"+joinDate.getFullYear()
    );

  function handleCommentEdit(updatedComment) {
    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedComment),
    })
    .then(resp => resp.json())
    .then(handleUpdateComment)
  }

  function handleIncrementLikes(id) {
    fetch(`/comments/${id}/likes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(resp => resp.json())
    .then(handleUpdateComment)

    setShowLikes(false)
  }

  function handleCommentDelete(id) {
    // Confirmation?
    fetch(`/comments/${id}`, {
      method: "DELETE",
    })
    .then(onDelete(id))
  }

  function handleShowEditor() {
    setShowEditor(showEditor => !showEditor)
  };

  const displayCurrentComment = (
    <div className="PostItem">
      <div className="CommentHeader">
        Created at: {commentCreatedAt}
      </div>
      <div className="CommentDetails">
        <div className="UserInfo">
          <div className="UserUsername">
            {user.username}
          </div>
          <div className="UserAvatar">
          </div>
          <div className="UserJoinDate">
            Join Date: {userJoinDate}
          </div>
        </div>
        <div className="CommentBody">
          <p>{content}</p>
        </div>
      </div>
      <div className="CommentFooter">
        {currentUser.id === user_id ? (
          <div className="userControls">
            <div className="editBtn">
              <img className="EditIcon" alt="Edit Button" onClick={handleShowEditor}/>
            </div>
            <div className="deleteBtn">
              <img className="TrashIcon" alt="Delete Button" onClick={() => handleCommentDelete(id)}/>
            </div>
          </div>
        ) : null}
          <div className="likes">
            {showLikes ? (
              <div className="likeBtn">
                <img className="LikeIcon" alt="Delete Button" onClick={() => handleIncrementLikes(id)}/>
              </div>
            ) : null}
              <div className="currentLikes">
                <p>Likes: {likes}</p>
              </div>
          </div>
      </div>
    </div>
  )

  const displayEditComment = (
    <EditComment 
      id={id} 
      content={content} 
      setShowEditor={setShowEditor} 
      handleCommentEdit={handleCommentEdit}
    />
  )

  return (
    <div className="comment">
      {showEditor ? displayEditComment : displayCurrentComment}
    </div>
  )
}

export default PostItem