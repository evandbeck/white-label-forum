import React from 'react';

function OriginalComment({ commentArray }) {
    
    const originalComment = ((commentArray[0] || {}).post || {});
    // const user = (((commentArray[0] || {}).post || {}).user || {});
    console.log(originalComment)

    let date = new Date(originalComment.created_at);

    let originalCommentCreatedAt = (
      date.getMonth()+1+
      "/"+date.getDate()+
      "/"+date.getFullYear()+
      " "+date.getHours()+
      ":"+date.getMinutes()+
      ":"+date.getSeconds()
      );
  
    // let joinDate = new Date(user.created_at);
  
    // let userJoinDate = (
    //   joinDate.getMonth()+1+
    //   "/"+joinDate.getDate()+
    //   "/"+joinDate.getFullYear()
    //   );

  return (
    <div className="PostItem">
      <div className="CommentHeader">
        {originalCommentCreatedAt}
      </div>
      <div className="CommentDetails">
        <div className="UserInfo">
          <div className="UserUsername">
            {/* {user.username} */}
          </div>
          <div className="UserAvatar">
          </div>
          <div className="UserJoinDate">
            {/* Join Date: {userJoinDate} */}
          </div>
        </div>
        <div className="CommentBody">
          <p>{originalComment.description}</p>
        </div>
      </div>
      <div className="CommentFooter">
        {/* {currentUser.id === user_id ? (
          <div className="userControls">
            <div className="editBtn">
              <button onClick={handleShowEditor}>EDIT</button>
            </div>
            <div className="deleteBtn">
              <button onClick={() => handleCommentDelete(id)}>DELETE</button>
            </div>
          </div>
        ) : null} */}
          <div className="likes">
            {/* {showLikes ? (
              <div className="likeBtn">
                <button onClick={() => handleIncrementLikes(id)}>Like</button>
              </div>
            ) : null} */}
              <div className="currentLikes">
                {/* <p>Likes: {likes}</p> */}
              </div>
          </div>
      </div>
    </div>
  )
}

export default OriginalComment