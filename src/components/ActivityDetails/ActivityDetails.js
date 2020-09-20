import React from 'react'
import './ActivityDetails.css'

const ActivityDetails = ({ id, rating, date }) => {
    return(
        <div className='Activity-Details' id={id}>
            <h2 className='rating'>Your Rating: {rating}<span className="close" id={id}>&times;</span></h2>
            <h3 className='date'>from {date}</h3>
        </div>
    )
}

export default ActivityDetails