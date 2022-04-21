import React from 'react';

function EditAboutMe({ firstName, setFirstName, lastName, setLastName, setShowEditor, handleProfileEdit }) {

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
    <div className="AboutMeEditor">
        <form onSubmit={updateProfile}>
            <div className="txt_field">
                <input type="text" required maxlength="15" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <span></span>
                <label>First Name</label>
            </div>
            <div className="txt_field">
                <input type="text" required maxlength="15" value={lastName} onChange={(e) => setLastName(e.target.value)} size="50"/>
                <span></span>
                <label>Last Name</label>
            </div>
            <div className="EditSubmit">
                <button>Update Profile</button>
                <button onClick={(e) => handleCancelEdit(e)}>Cancel Edit</button>
            </div>
        </form>
    </div>
  )
}

export default EditAboutMe