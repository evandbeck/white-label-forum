import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import ForumItem from './ForumItem';

function Forum() {
  const [subforumArray, setSubforumArray] = useState([])

  useEffect(() => {
    fetch('/subforums')
    .then(resp => resp.json())
    .then(console.log())
    .then(setSubforumArray)
  }, [])

  const displaySubforums = subforumArray.map(subforumObj => <ForumItem key={subforumObj.id} {...subforumObj}/>)

  return (
    <div className="Forum">
      <h4 className="ForumDirectory">Forum</h4>
      {displaySubforums}
    </div>
  )
}

export default Forum