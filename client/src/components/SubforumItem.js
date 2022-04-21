import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditPost from './EditPost';

function SubforumItem({ currentUser, id, name, description, user_id, created_at, user, comments, postArray, setPostArray, handleUpdatePost, onDelete }) {
  const [showEditor, setShowEditor] = useState(false)

  function handlePostEdit(updatedPost) {
    fetch(`/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    }).then(resp => resp.json())
      .then(updatedPost => handleUpdatePost(updatedPost))
  }

  function handlePostDelete(id) {
    //Confirmation?
    fetch(`/posts/${id}`, {
      method: "DELETE",
    })
    // .then(resp => resp.json())
    .then(onDelete(id))
  }

  function handleShowEditor() {
    setShowEditor(showEditor => !showEditor)
    };

  let date = new Date(created_at);

  let postCreatedAt = (
    date.getMonth()+1+
    "/"+date.getDate()+
    "/"+date.getFullYear()
  );

  const displayCurrentPost = (
    <div className="SubforumItem">
      <div className="PostContent">
        <ul>
          <li className="PostName"><Link className="PostNameLink" to={`/posts/${id}/comments`}>{name}</Link></li>
          <li className="PostDescription">{description}</li>
        </ul>
      </div>
      <div className="PostControls">
          {currentUser.id === user_id ? (
            <div className="PostControlsContainer">
              <img className="EditIcon" alt="Edit Button" onClick={handleShowEditor}/>
              <img className="TrashIcon" alt="Delete Button" onClick={() => handlePostDelete(id)}/>
            </div>
          ) : null}
      </div>
      <div className="PostStats">
          <div className="PostStatsContainer">
              <div className="PostCreatedBy">Created by: {user.username}</div>
              <div className="PostCreatedAt">Created at: {postCreatedAt}</div>
              <div className="TotalComments">Total Comments: {comments.length}</div>
          </div>
      </div>
    </div>
  )

  const displayEditPost = (
    <div>
    <EditPost 
      id={id} 
      name={name} 
      description={description} 
      postArray={postArray} 
      setPostArray={setPostArray} 
      setShowEditor={setShowEditor} 
      handlePostEdit={handlePostEdit}
    />
  </div>
  )

  return (
    <div className="post">
      {showEditor ? displayEditPost : displayCurrentPost}
    </div>
  )
}

export default SubforumItem