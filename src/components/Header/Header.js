import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'
import noseIcon from '../../assets/nose-icon.png'

const Header = () => {
    return(
        <div className='header'>
            <NavLink to='/' className='main-header-link' style={{ textDecoration: 'none' }}>
                <img className='icon' alt='Home icon' src={noseIcon} /><h1>Smell Ya Later</h1></NavLink>
            <div className='links-container'>
                <NavLink to='/' className='header-link' style={{ textDecoration: 'none' }}>Home</NavLink>
                <NavLink to='/user-profile' className='header-link' style={{ textDecoration: 'none' }}>User Profile</NavLink>
                <NavLink to='/activity' className='header-link' style={{ textDecoration: 'none' }}>Activity</NavLink>
            </div>
        </div>
    )
}

export default Header