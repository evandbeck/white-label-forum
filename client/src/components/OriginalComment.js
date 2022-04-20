import React from 'react';

function OriginalComment({ commentArray }) {
    
    const originalComment = ((commentArray[0] || {}).post || {});
    const originalCommentUser = ((commentArray[0] || {}).user || {});

    let date = new Date(originalComment.created_at);

    let originalCommentCreatedAt = (
      date.getMonth()+1+
      "/"+date.getDate()+
      "/"+date.getFullYear()+
      " "+date.getHours()+
      ":"+date.getMinutes()+
      ":"+date.getSeconds()
      );
  
    let joinDate = new Date(originalCommentUser.created_at);
  
    let userJoinDate = (
      joinDate.getMonth()+1+
      "/"+joinDate.getDate()+
      "/"+joinDate.getFullYear()
      );

  return (
    <div className="PostItem">
      <div className="OriginalCommentHeader">
        Original Comment
      </div>
      <div className="CommentHeader">
        {originalCommentCreatedAt}
      </div>
      <div className="CommentDetails">
        <div className="UserInfo">
          <div className="UserUsername">
            {originalCommentUser.username}
          </div>
          <div className="UserAvatar">
          </div>
          <div className="UserJoinDate">
            Join Date: {userJoinDate}
          </div>
        </div>
        <div className="CommentBody">
          <p className="CommentBodyTitle">{originalComment.name}</p>
          <hr></hr>
          <p className="CommentBodyDescription">{originalComment.description}</p>
        </div>
      </div>
      <div className="CommentFooter">
      </div>
    </div>
  )
}

export default OriginalComment