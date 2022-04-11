import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import SubforumItem from './SubforumItem'

function Subforum({ id, postArray, setPostArray, onDelete }) {
  // const [postArray, setPostArray] = useState([])

  useEffect(() => {
    fetch('/posts')
    .then(resp => resp.json())
    .then(setPostArray)
  }, [])

  const displayPosts = postArray.map(postObj => <SubforumItem key={postObj.id} {...postObj} onDelete={onDelete}/>)

  return (
    <div className="Subforum">
        Subforum / Posts Container
        <div>
          <Link to="/create"><button className="newThreadButton">Post New Thread</button></Link>
        </div>
        {displayPosts}
    </div>
  )
}

export default Subforum