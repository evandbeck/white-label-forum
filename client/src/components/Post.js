import React, {useState, useEffect } from 'react'
import PostEditor from './PostEditor'
import PostItem from './PostItem'

function Post({ id, content }) {
  const [commentArray, setCommentArray] = useState([])
  const [showEditor, setShowEditor] = useState(false)

  useEffect(() => {
    fetch('/comments')
    .then(resp => resp.json())
    .then(setCommentArray)
  }, [])

  function handleShowEditor() {
    setShowEditor(showEditor => !showEditor)

    // e.preventDefault();
    // fetch("/posts", {
    //   method: "POST",
    //   headers: { 
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ content }),
    // }).then(r => r.json)
    //   .then(newPost => console.log(newPost))
    };

  const displayComments = commentArray.map(commentObj => <PostItem key={commentObj.id} {...commentObj}/>)

  return (
    <div className="Post">
      Post / Comment Container
      {displayComments}
      <button onClick={handleShowEditor}>{showEditor ? "Close Editor" : "Make a New Post"}</button>
      {showEditor ? <PostEditor /> : null}
    </div>
  )
}

export default Post