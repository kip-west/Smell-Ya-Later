import './SmellKit.css'
import React, { Component } from 'react';
import Item from '../Item/Item'
import PropTypes from 'prop-types'
import { fetchItems } from '../../apiCalls'

class SmellKit extends Component {
    constructor(props) {
        super();
        this.state = {
            items: {},
            error: '',
        }
    }

    async componentDidMount() {
        try {
            const data = await fetchItems()
            this.setState({ items: data.items })
        } catch (error) {
            this.setState({ error: error })
        }
    }
    createItemCards = () => {
        const items = this.state.items;
        const itemIds = Object.keys(this.state.items);
        return itemIds.map(id => {
            const name = items[id].name;
            const imageUrl = items[id].image;
            return <Item key={id} id={parseInt(id)} name={name} imageUrl={imageUrl} user={this.props.user} isLoggedIn={this.props.isLoggedIn} />
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
    user: PropTypes.object,
    isLoggedIn: PropTypes.bool,
}

export default SmellKit