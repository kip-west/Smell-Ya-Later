import React from 'react';
import './Item.css'
import { sendMessage } from '../../apiCalls'

const Item = ({ id, name, imageUrl }) => {
    const handleClick = (event) => {
        event.preventDefault();
        const itemName = name;
        const phoneNumber = '+15555555555';
        const body = {
            to: phoneNumber,
            body: itemName
        }
        sendMessage(body)
    }

    return(
        <div className='item-card' id={id}>
            <img className='item-image' src={imageUrl} alt={name} />
            <h1 className='item-name'>{name}</h1>
            <button className='send-text-button' name={name} onClick={handleClick}>Send Text</button>
        </div>
    )
}

export default Item