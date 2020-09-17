import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <div className='header'>
            <h1>Smell Ya Later</h1>
            <div className='links-container'>
                <button>Home</button>
                <button>User Profile</button>
                <button>Activity</button>
            </div>
        </div>
    )
}

export default Header