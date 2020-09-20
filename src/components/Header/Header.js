import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'
import noseIcon from '../../assets/nose-icon.png'
import Collapsible from 'react-collapsible'

const Header = () => {
    return(<>
        <div className='header'>
            <NavLink to='/' className='main-header-link' style={{ textDecoration: 'none' }}>
                <img className='icon' alt='Home icon' src={noseIcon} /><h1>Smell Ya Later</h1></NavLink>
            <div className='links-container'>
                <NavLink to='/' className='header-link' style={{ textDecoration: 'none' }}>Home</NavLink>
                <NavLink to='/user-profile' className='header-link' style={{ textDecoration: 'none' }}>User Profile</NavLink>
                <NavLink to='/activity' className='header-link' style={{ textDecoration: 'none' }}>Activity</NavLink>
            </div>
        </div>
            <div className='about-dropdown'>
                <Collapsible trigger='About'>
                    <p className='about-text'><b>Our sense of smell plays a vital role in connecting us to our emotions and memories.</b> In the wake of COVID-19, an unprecendented number of people experienced a complete or partial loss of their sense of smell, or anosmia, affecting their mental and emotional health.</p>
                    <p className='about-text'>While most people who lose their sense of smell due to COVID-19 seem to regain it over time, there are a number of individuals who report anosmia <i>even after</i> recovering from the virus. A growing body of research indicates that individuals who engage with smell therapy may regain their sense of smell more quickly and completely compared to those who don't.</p>
                    <p className='about-text'>Smell Ya Later is a symptom tracking application designed to encourage those experiencing smell loss to engage with treatment and track their progress over time. Users can build a unique Smell Kit, full of items they have around the house. Then, they receive text message prompts to report their sense of smell for each item, allowing Smell Ya Later to keep track of this information over time.</p>
                </Collapsible>
            </div>
        </>
    )
}

export default Header