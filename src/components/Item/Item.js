import React from 'react';
import './Item.css'
import { sendMessage } from '../../apiCalls'

const Item = ({ id, name, imageUrl, user }) => {
    const handleClick = (event) => {
        event.preventDefault();
        const itemName = name;
        const phoneNumber = user.phoneNumber;
        const body = {
            to: phoneNumber,
            body: itemName
        }
        sendMessage(body)
    }

    return(
        <div className='item-card' id={id} onClick={handleClick}>
            <img className='item-image' src={imageUrl} alt={name}/>
            <h1 className='item-name'>{name}</h1>
        </div>
    )
}

export default Item