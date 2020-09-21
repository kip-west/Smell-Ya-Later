import React from 'react';
import './Item.css'
import { sendMessage } from '../../apiCalls'
import PropTypes from 'prop-types'

const Item = ({ id, name, imageUrl, user, isLoggedIn }) => {
    const handleClick = (event) => {
        event.preventDefault();
        if(isLoggedIn) {
            const itemName = name;
            const phoneNumber = user.phoneNumber;
            const body = {
                to: phoneNumber,
                body: `Hi ${user.name}! Please concentrate on taking gentle sniffs of your ${itemName} for 20 seconds. Be as attentive as you can and try to block out other intrusive thoughts. Please reply with the item name & 1 (I didn't smell the ${itemName} at all) to 5 (I could smell the ${itemName} completely) score when you're done.`
            }
            sendMessage(body)
        }
    }

    return(
        <div className='item-card' id={id} onClick={handleClick}>
            <img className='item-image' src={imageUrl} alt={name}/>
            <h1 className='item-name'>{name}</h1>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    user: PropTypes.object,
    isLoggedIn: PropTypes.bool
}

export default Item