import React from 'react'
import './ActivityDetails.css'

const ActivityDetails = ({ item, rating, date }) => {
    return(
        <div className='Activity-Details'>
            <h1>{item}</h1>
            <h2>Your Rating: {rating}</h2>
            <h3>on {date}</h3>
            <button className='delete-button'>Delete</button>
        </div>
    )
}

export default ActivityDetails