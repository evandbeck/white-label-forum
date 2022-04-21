import React from 'react';

function UsersPosts({ currentUser }) {
  console.log(currentUser.comments)

  let usersComments = currentUser.comments

  let displayUsersComments = usersComments.map(comment => (
    <div className="UsersCommentsItem">
      <div className="UsersCommentsItemContent">
        <div>{comment.content}</div>
      </div>
      <div className="UsersCommentsItemStats">
        <div>Likes: {comment.likes}</div>
        <div>Created: {new Date(comment.created_at).getMonth()+1+
          "/"+new Date(comment.created_at).getDate()+
          "/"+new Date(comment.created_at).getFullYear()}
        </div>
      </div>
    </div>));

  return (
    <div className="UsersComments">
        {displayUsersComments}
    </div>
  )
}

export default UsersPosts