import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import SubforumItem from './SubforumItem'
import CreatePost from './CreatePost';

function Subforum({ postArray, setPostArray, handleNewPost, handleUpdatePost, onDelete }) {
  const [showCreatePost, setShowCreatePost] = useState(false)
  const {subforum_id} = useParams()

  useEffect(() => {
    fetch(`/subforums/${subforum_id}/posts`)
    .then(resp => resp.json())
    .then(setPostArray)
  }, [])

  function handleShowCreatePost() {
    setShowCreatePost(showCreatePost => !showCreatePost)
  };

  const displayPosts = postArray.map(postObj => (
    <SubforumItem 
      key={postObj.id} 
      {...postObj} 
      handleUpdatePost={handleUpdatePost} 
      onDelete={onDelete}
    />
  ));

  return (
    <div className="Subforum">
        Subforum / Posts Container
        <div>
          <button className="newPostButton" onClick={handleShowCreatePost}>{showCreatePost ? "Close Editor" : "Create a New Post"}</button>
          {showCreatePost ? <CreatePost subforum_id={subforum_id} postArray={postArray} setPostArray={setPostArray} setShowCreatePost={setShowCreatePost} handleNewPost={handleNewPost}/> : null}
          {/* <Link to="/create"><button className="newPostButton">Create New Post</button></Link> */}
        </div>
        {displayPosts}
    </div>
  )
}

export default Subforum