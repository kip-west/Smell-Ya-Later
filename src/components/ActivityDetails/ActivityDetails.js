import React from 'react'
import './ActivityDetails.css'

const ActivityDetails = ({ item, rating, date }) => {
    return(
        <div className='Activity-Details'>
            <h2 className='rating'>Your Rating: {rating}<span className="close">&times;</span></h2>
            <h3 className='date'>from {date}</h3>
            
        </div>
    )
}

export default ActivityDetails