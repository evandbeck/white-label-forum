import React, { useState } from 'react';
import EditAboutMe from './EditAboutMe';

function AboutMe({ currentUser }) {
  const [showEditor, setShowEditor] = useState(false)
  const [firstName, setFirstName] = useState(currentUser.first_name)
  const [lastName, setLastName] = useState(currentUser.last_name)

  function handleProfileEdit(updatedProfile) {
    fetch(`/profile/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
    .then(resp => resp.json())
    .then(console.log)
    .then(handleUpdateProfile)
  }

  function handleUpdateProfile(updatedProfile) {
    console.log(updatedProfile)
  }

  function handleShowEditor() {
    setShowEditor(showEditor => !showEditor)
  };

  const displayAboutMe = (
    <div className="AboutMe">
        <div className="txt_field">
            <label>{currentUser.first_name}</label>
            <span></span>
            <p>First Name</p>
        </div>
        <div className="txt_field">
            <p>Last Name</p>
            <span></span>
            <label>{currentUser.last_name}</label>
        </div>
        <div className="UpdateProfile">
            <button onClick={handleShowEditor}>Update Profile</button>
        </div>
    </div>
  )

  const displayEditAboutMe = (
      <EditAboutMe 
        currentUser={currentUser} 
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        setShowEditor={setShowEditor} 
        handleProfileEdit={handleProfileEdit}
    />
  )

  return (
      <div>
          {showEditor ? displayEditAboutMe : displayAboutMe}
      </div>
  )
}

export default AboutMe