import React from 'react'
import './ActivityDetails.css'
import moment from 'moment'

const ActivityDetails = ({ id, rating, date }) => {
    console.log(date)
    return(
        <div className='Activity-Details' id={id}>
            <h2 className='rating'>Your Rating: {rating}<span className="close" id={id}>&times;</span></h2>
            <h3 className='date'>from {moment(date).format('dddd')},</h3>
            <h3 className='date'>{moment(date.props.children).format('ll')}</h3>
            <h3 className='date'>at {moment(date.props.children).format('LT')}</h3>
        </div>
    )
}

export default ActivityDetails