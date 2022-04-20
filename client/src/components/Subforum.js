import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import SubforumItem from './SubforumItem'
import CreatePost from './CreatePost';

function Subforum({ currentUser }) {
  const [postArray, setPostArray] = useState([])
  const [showCreatePost, setShowCreatePost] = useState(false)
  const {subforum_id} = useParams()

// CRUD POSTS
  useEffect(() => {
    fetch(`/subforums/${subforum_id}/posts`)
    .then(resp => resp.json())
    .then(setPostArray)
  }, [subforum_id])

  function handleNewPost(newPost) {
    setPostArray((postArray) => [...postArray, newPost]);
  }

  function handleUpdatePost(updatedPost) {
    const updatedPosts = postArray.map((postObj) => {
      if (postObj.id === updatedPost.id) {
        return updatedPost;
      } else {
        return postObj;
      }
    });
    setPostArray(updatedPosts)
  }

  function onDelete(id) {
    const deletePost = postArray.filter(postObj => postObj.id !== id)
    setPostArray(deletePost)
  }
 
// SHOW <CreatePost>
  function handleShowCreatePost() {
    setShowCreatePost(showCreatePost => !showCreatePost)
  };

// RENDER SELECT POSTS
  const displayPosts = postArray.map(postObj => (
    <SubforumItem 
      key={postObj.id}
      currentUser={currentUser}
      {...postObj} 
      handleUpdatePost={handleUpdatePost} 
      onDelete={onDelete}
    />
  ));

  return (
    <div className="Subforum">
        <h4 className="ForumDirectory">Forum | Subforum</h4>
        <div>
          <button onClick={handleShowCreatePost}>{showCreatePost ? "Close Editor" : "Create a New Post"}</button>
          {showCreatePost ? 
            <CreatePost 
              currentUser={currentUser} 
              subforum_id={subforum_id} 
              postArray={postArray} 
              setPostArray={setPostArray} 
              setShowCreatePost={setShowCreatePost} 
              handleNewPost={handleNewPost}
            /> 
          : null}
        </div>
        <header><p>Test</p></header>
        {displayPosts}
    </div>
  )
}

export default Subforum