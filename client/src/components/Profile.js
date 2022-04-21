import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import AboutMe from './AboutMe';
import UsersPosts from './UsersPosts';

function Profile({ currentUser }) {
  const [user, setUser] = useState("")
  const [showUserPosts, setShowUserPosts] = useState(false)
  // const {id} = useParams()

  useEffect(() => {
    fetch(`/profile/${currentUser.id}`)
        .then(r => r.json())
        .then(console.log)
        .then(user => setUser(user));
      }, [currentUser.id])

  function handleAboutMe(){
    setShowUserPosts(false)
  }

  function handleUsersPosts(){
    setShowUserPosts(true)
  }

  let joinDate = new Date(currentUser.created_at);
  
  let userJoinDate = (
    joinDate.getMonth()+1+
    "/"+joinDate.getDate()+
    "/"+joinDate.getFullYear()
    );

  return (
    <div className="Profile">
      <div className="UserProfileInfo">
          <div className="UserProfileUsername">
            {currentUser.username}
          </div>
          <div className="UserProfileAvatar">
          </div>
          <div className="UserProfileJoinDate">
            Join Date: {userJoinDate}
          </div>
          <div className="UserProfileTotals">
            Total Posts: {currentUser.posts.length}
          </div>
          <div className="UserProfileTotals">
            Total Comments: {currentUser.comments.length}
          </div>
        </div>
      <div className="ProfileUserDetails">
        <div className="ProfileUserDetailsNavBar">
          <div className={showUserPosts ? "" : "ProfileUserDetailsNavBarActive"} onClick={handleAboutMe}>
            About Me
          </div>
          <div className={showUserPosts ? "ProfileUserDetailsNavBarActive" : ""} onClick={handleUsersPosts}>
            My Comments
          </div>
        </div>
        <div className="ProfileUserContent">
          {showUserPosts ? <UsersPosts currentUser={currentUser}/> : <AboutMe currentUser={currentUser}/>}
        </div>
      </div>
    </div>
  )
}

export default Profile