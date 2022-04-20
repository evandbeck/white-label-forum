import React from 'react';
import { Link } from 'react-router-dom';

function Subforum({ id, name, description }) {

  return (
    <div className="ForumItem">
      <div className="SubforumImage"></div>
      <div className="SubforumText">
        <Link className="SubforumName" to={`/subforums/${id}/posts`}><h2>{name}</h2></Link>
        <p className="SubforumDescription">{description}</p>
      </div>
      <div className="SubforumStats">
        <div className="SubforumStatsContainer">test</div>
      </div>
    </div>
  )
}

export default Subforum