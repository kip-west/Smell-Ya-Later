import './SmellKit.css'
import React, { Component } from 'react';
import Item from '../Item/Item'
import PropTypes from 'prop-types'

class SmellKit extends Component {
    constructor() {
        super();
        this.state = {
            items: {
                1: { 
                    id: 1,
                    name: 'Candle',
                    image: 'https://images.unsplash.com/photo-1545659446-f03b9dc0827a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                },
                2: {
                    id: 2,
                    name: 'Lemon',
                    image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                },
                3: {
                    id: 3,
                    name: 'Rosemary',
                    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                },
                4: {
                    id: 4,
                    name: 'Eucalyptus',
                    image: 'https://images.unsplash.com/photo-1517008607120-139741f5eeef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                },
            }
        }
    }

    createItemCards = () => {
        const items = this.state.items;
        const itemIds = Object.keys(this.state.items);
        return itemIds.map(id => {
            const name = items[id].name;
            const imageUrl = items[id].image;
            console.log(name, imageUrl)
            return <Item key={id} id={id} name={items[id].name} imageUrl={items[id].image} />
        })
    }
    
    render() {
        const itemCards = this.createItemCards()
        return(
            <div className='smell-kit'>
                <h1>Your Smell Kit</h1>
                <div className='items-container'>
                    {itemCards}
                </div>
            </div>
        )
    }
}

SmellKit.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
}

export default SmellKit