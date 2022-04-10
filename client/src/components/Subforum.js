import React, {useState, useEffect} from 'react'
import SubforumItem from './SubforumItem'

function Subforum() {
  const [postArray, setPostArray] = useState([])

  useEffect(() => {
    fetch('/posts')
    .then(resp => resp.json())
    .then(setPostArray)
  }, [])

  const displayPosts = postArray.map(postObj => <SubforumItem key={postObj.id} {...postObj}/>)

  return (
    <div className="Subforum">
        Subforum / Posts Container
        {displayPosts}
    </div>
  )
}

export default Subforum