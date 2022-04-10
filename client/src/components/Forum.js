import React, {useState, useEffect} from 'react'
import Subforum from './Subforum'

function Forum() {
  const [subforumArray, setSubforumArray] = useState([])

  useEffect(() => {
    fetch('/subforums')
    .then(resp => resp.json())
    .then(setSubforumArray)
  }, [])

  const displaySubforums = subforumArray.map(subforumObj => <Subforum key={subforumObj.id} {...subforumObj}/>)

  return (
    <div className="Forum">
      {displaySubforums}
    </div>
  )
}

export default Forum