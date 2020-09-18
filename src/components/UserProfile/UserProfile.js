import React, { Component } from 'react';
import './UserProfile.css'

class UserProfile extends Component {
    render() {
        return (
            <div className='user-profile-container'>
                <h1>User Profile</h1>
                <div className='form-container'>
                    <p>Update Contact Information</p>
                    <form className='update-profile-form'>
                        <input className='name-input' placeholder='Enter name here' />
                        <input className='phone-input' placeholder='Enter phone number here' />
                        <button className='update-profile-button'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserProfile