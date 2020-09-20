import React from 'react'
import './ActivityDetails.css'
import moment from 'moment'

const ActivityDetails = ({ id, rating, date }) => {
    console.log(date)
    return(
        <div className='Activity-Details' id={id}>
            <span className="close" id={id}>&times;</span>
            <h2 className='rating'>Your Rating: {rating}</h2>
            <h3 className='date'>{moment(date).format('dddd')}, {moment(date.props.children).format('ll')} at {moment(date.props.children).format('LT')}</h3>
        </div>
    )
}

export default ActivityDetails