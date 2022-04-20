import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AboutMe from './AboutMe';
import UsersPosts from './UsersPosts';

function Profile({ currentUser }) {
  const [user, setUser] = useState("")
  const [showUserPosts, setShowUserPosts] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    fetch(`/profile/${currentUser.id}`)
        .then(r => r.json())
        .then(console.log)
        .then(user => setUser(user));
      }, [currentUser.id])

  function handleAboutMe(){
    setShowUserPosts(true)
  }

  function handleUsersPosts(){
    setShowUserPosts(false)
  }

  return (
    <div className="Profile">
      <div className="ProfileUserInfo">
        {currentUser.username}
      </div>
      <div className="ProfileUserDetails">
        <div className="ProfileUserDetailsNavBar">
          <div onClick={handleAboutMe}>
            About Me
          </div>
          <div onClick={handleUsersPosts}>
            My Posts
          </div>
        </div>
        <div className="ProfileUserContent">
          {showUserPosts ? <AboutMe currentUser={currentUser}/> : <UsersPosts/>}
        </div>
      </div>
    </div>
  )
}

export default Profile