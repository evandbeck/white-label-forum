import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PostEditor from './PostEditor'
import PostItem from './PostItem'
import CreateComment from './CreateComment';

function Post({ id, content }) {
  const [commentArray, setCommentArray] = useState([])
  const [showEditor, setShowEditor] = useState(false)
  const {post_id} = useParams()

  useEffect(() => {
    fetch(`/posts/${post_id}/comments`)
    .then(resp => resp.json())
    .then(setCommentArray)
  }, [])

  function onDelete(id) {
    const deleteComment = commentArray.filter(commentObj => commentObj.id !== id)
    setCommentArray(deleteComment)
  }

  function handleShowEditor() {
    setShowEditor(showEditor => !showEditor)
    };
 
  // Once SUBMIT is clicked, I want to:
  // 1: Update DB w/ New Comment (POST Request)
  // 2: Update State (in Post.js)

  // function onSubmit() {
  //   fetch("/posts", {
  //         method: "POST",
  //         headers: { 
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ content }),
  //       }).then(r => r.json)
  //         .then(newPost => console.log(newPost))
  //         // .then(setCommentArray)
  // }

  const displayComments = commentArray.map(commentObj => <PostItem key={commentObj.id} {...commentObj} onDelete={onDelete}/>)

  return (
    <div className="Post">
      Post / Comment Container
      {displayComments}
      <button onClick={handleShowEditor}>{showEditor ? "Close Editor" : "Make a New Post"}</button>
      {showEditor ? <CreateComment /> : null}
    </div>
  )
}

export default Post