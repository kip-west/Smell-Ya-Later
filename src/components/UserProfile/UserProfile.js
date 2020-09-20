import React, { Component } from 'react';
import './UserProfile.css'

class UserProfile extends Component {
    constructor(props) {
        super();
        this.state = {
            nameInput: '',
            phoneNumberInput: '',
            error: '',
        }
    }

    handleChange = (event) => {
        this.setState( { [event.target.name] : event.target.value })
    }

    checkFormInputs = () => {
        const nameInput = document.querySelector('.name-input');
        const phoneInput = document.querySelector('.phone-input')
        if(!nameInput.value || !phoneInput.value) {
            this.setState({ error: 'Please provide both a name and phone number!'})
        } else if (nameInput.value && phoneInput.value) {
            this.props.updateProfile({ name: nameInput.value, phoneNumber: phoneInput.value})
        }
    }

    clearForm = () => {
        const nameInput = document.querySelector('.name-input');
        const phoneInput = document.querySelector('.phone-input')
        nameInput.value = '';
        phoneInput.value = '';
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.checkFormInputs();
        this.clearForm();
    }

    render() {
        return (
            <div className='user-profile-container'>
                <h1>User Profile</h1>
                <div className='form-container'>
                <div className='current-user-info'>
                    <h2>Current Contact Information</h2>
                    <p>Name: {this.props.user.name ? this.props.user.name : 'Please update name'}</p>
                    <p>Number: {this.props.user.phoneNumber ? this.props.user.phoneNumber : 'Please update phone number'}</p>
                </div>
                    <h2>Update Contact Information</h2>
                    <form className='update-profile-form' onSubmit={this.handleSubmit}>
                        <input className='name-input' name='nameInput' placeholder='Enter name here' onChange={this.handleChange} />
                        <input className='phone-input' name='phoneNumberInput' type='tel' placeholder='Enter phone number here' onChange={this.handleChange} />
                        <button className='update-profile-button'>Submit</button>
                        <div className='error-field'>{this.state.error}</div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserProfile