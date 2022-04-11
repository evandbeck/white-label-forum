import React from 'react';
import { Link } from 'react-router-dom';

function SubforumItem({ id, name, description }) {
  return (
    <div className="SubforumItem">
      <Link to={`/posts/${id}/comments`}><p className="postUsername">Post Title: {name}</p></Link>
      <p className="postDescription">{description}</p>
    </div>
  )
}

export default SubforumItem