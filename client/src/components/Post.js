import React, {useState, useEffect } from 'react'
import PostItem from './PostItem'

function Post() {
  const [commentArray, setCommentArray] = useState([])

  useEffect(() => {
    fetch('/comments')
    .then(resp => resp.json())
    .then(setCommentArray)
  }, [])

  const displayComments = commentArray.map(commentObj => <PostItem key={commentObj.id} {...commentObj}/>)

  return (
    <div className="Post">
      Post / Comment Container
      {displayComments}
      <button>Make a New Post</button>
    </div>
  )
}

export default Post