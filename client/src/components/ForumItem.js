import React from 'react';
import { Link } from 'react-router-dom';

function Subforum({ id, name, description }) {

  return (
    <div className="ForumItem">
            <Link to={`/subforums/${id}/posts`}><p className="subforumName">{name}</p></Link>
            <p className="subforumDescription">{description}</p>
    </div>
  )
}

export default Subforum