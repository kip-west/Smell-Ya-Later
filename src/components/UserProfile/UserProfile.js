import React, { Component } from 'react';
import './UserProfile.css'

class UserProfile extends Component {
    render() {
        return (
            <div className='user-profile-container'>
                <h1>User Profile</h1>
                <form className='update-profile-form'>
                    <input name='name-input' placeholder='Enter name here' />
                    <input name='phone-input' placeholder='Enter phone number here' />
                    <button className='update-profile-button'>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserProfile