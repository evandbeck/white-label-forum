import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PostEditor from './PostEditor'
import PostItem from './PostItem'
import CreateComment from './CreateComment';

function Post({ content, commentArray, setCommentArray }) {
  // const [commentArray, setCommentArray] = useState([])
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

  const displayComments = commentArray.map(commentObj => <PostItem key={commentObj.id} {...commentObj} onDelete={onDelete}/>)

  return (
    <div className="Post">
      Post / Comment Container
      {displayComments}
      <button onClick={handleShowEditor}>{showEditor ? "Close Editor" : "Create a New Comment"}</button>
      {showEditor ? <CreateComment post_id={post_id} commentArray={commentArray} setCommentArray={setCommentArray}/> : null}
    </div>
  )
}

export default Post