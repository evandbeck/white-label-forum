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
      <form >
            <div>
                <label>First Name</label>
                <p>{currentUser.first_name}</p>
            </div>
            <div>
                <label>Last Name</label>
                <p>{currentUser.last_name}</p>
            </div>
            <div className="editBtn">
                <button onClick={handleShowEditor}>EDIT</button>
            </div>
        </form>
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