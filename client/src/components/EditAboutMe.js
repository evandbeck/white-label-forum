import React, { useState } from 'react';

function EditAboutMe({ currentUser, setShowEditor, handleProfileEdit }) {
  const [firstName, setFirstName] = useState(currentUser.first_name)
  const [lastName, setLastName] = useState(currentUser.last_name)

  function updateProfile(e) {
    e.preventDefault();
    const updatedProfile = {
        first_name: firstName,
        last_name: lastName
      };
    handleProfileEdit(updatedProfile);
    setShowEditor(false);
  };

  function handleCancelEdit(e) {
    e.preventDefault();
    setShowEditor(false);
  };

  return (
    <div>
        <form onSubmit={updateProfile}>
            <div>
                <label>First Name</label>
                <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} size="50"></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} size="50"></input>
            </div>
            <div>
                <button>Update Profile</button>
                <button onClick={(e) => handleCancelEdit(e)}>Cancel Edit</button>
            </div>
        </form>
    </div>
  )
}

export default EditAboutMe