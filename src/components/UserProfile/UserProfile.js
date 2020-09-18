import React, { Component } from 'react';
import './UserProfile.css'

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            userInfo: {
                name: '',
                phoneNumber: '',
            },
            nameInput: '',
            phoneNumberInput: '',
        }
    }

    handleChange = (event) => {
        this.setState( { [event.target.name] : event.target.value })
    }

    clearForm = () => {
        const nameInput = document.querySelector('.name-input');
        const phoneInput = document.querySelector('.phone-input')
        nameInput.value = '';
        phoneInput.value = '';
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState( { 
            userInfo: {
                name: this.state.nameInput,
                phoneNumber: this.state.phoneNumberInput
            }
        })
        this.clearForm()
    }

    render() {
        return (
            <div className='user-profile-container'>
                <h1>User Profile</h1>
                <div className='form-container'>
                    <p>Update Contact Information</p>
                    <form className='update-profile-form' onSubmit={this.handleSubmit}>
                        <input className='name-input' name='nameInput' placeholder='Enter name here' onChange={this.handleChange} />
                        <input className='phone-input' name='phoneNumberInput' type='tel' placeholder='Enter phone number here' onChange={this.handleChange} />
                        <button className='update-profile-button'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserProfile