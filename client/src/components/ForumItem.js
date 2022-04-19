import React from 'react';
import { Link } from 'react-router-dom';

function Subforum({ id, name, description }) {

  return (
    <div className="ForumItem">
      <ul>
        <li className="subforumName"><Link to={`/subforums/${id}/posts`}>{name}</Link></li>
        <li className="subforumDescription">{description}</li>
      </ul>
    </div>
  )
}

export default Subforum