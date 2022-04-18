import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// import PostEditor from './PostEditor'
import PostItem from './PostItem'
import CreateComment from './CreateComment';

function Post({ currentUser }) {
  const [commentArray, setCommentArray] = useState([])
  const [originalComment, setOriginalComment] = useState({ name: '' })
  const [showCreateComment, setShowCreateComment] = useState(false)
  const {post_id} = useParams()

  useEffect(() => {
    fetch(`/posts/${post_id}`)
    .then(resp => resp.json())
    .then((r) => console.log(r.name, r.description))
  }, []);
  
  useEffect(() => {
    fetch(`/posts/${post_id}/comments`)
    .then(resp => resp.json())
    .then(setCommentArray)
  }, [])

  function handleNewComment(newComment) {
    setCommentArray((commentArray) => [...commentArray, newComment]);
  };

  function handleUpdateComment(updatedComment) {
    console.log(updatedComment)
    const updatedComments = commentArray.map((commentObj) => {
      if (commentObj.id === updatedComment.id) {
        return updatedComment;
      } else {
        return commentObj;
      }
    });
    setCommentArray(updatedComments)
  }

  function onDelete(id) {
    const deleteComment = commentArray.filter(commentObj => commentObj.id !== id)
    setCommentArray(deleteComment)
  }

  function handleShowCreateComment() {
    setShowCreateComment(showCreateComment => !showCreateComment)
  };

  const displayComments = commentArray.map(commentObj => (
    <PostItem 
      key={commentObj.id}
      currentUser={currentUser} 
      {...commentObj} 
      handleUpdateComment={handleUpdateComment} 
      onDelete={onDelete}
    />
  ));
  
  return (
    <div className="Post">
      Post / Comment Container
      <p>Original Comment Here</p>
      {/* {originalComment} */}
      {displayComments}
      <button onClick={handleShowCreateComment}>{showCreateComment ? "Close Editor" : "Create a New Comment"}</button>
      {showCreateComment ? 
        <CreateComment 
          currentUser={currentUser} 
          post_id={post_id} commentArray={commentArray} 
          setCommentArray={setCommentArray} 
          setShowCreateComment={setShowCreateComment} 
          handleNewComment={handleNewComment}
        /> 
      : null}
    </div>
  )
}

export default Post