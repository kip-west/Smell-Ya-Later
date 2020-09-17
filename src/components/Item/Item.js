import React from 'react';
import './Item.css'

const Item = () => {
    return(
        <div className='item-card'>
            <img className='item-image' src='https://images.unsplash.com/photo-1545659446-f03b9dc0827a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='Candle' />
            <h1 className='item-name'>Candle</h1>
        </div>
    )
}

export default Item