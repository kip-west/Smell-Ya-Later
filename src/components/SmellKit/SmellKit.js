import React, { Component } from 'react';

class SmellKit extends Component {
    constructor() {
        super();
        this.state = {
            items: {
                1: { 
                    id: 1,
                    name: 'Candle',
                    image: 'https://images.unsplash.com/photo-1545659446-f03b9dc0827a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                }
            }
        }
    }
    
    render() {
        return(
            <div className='smell-kit'>
                <h1>Your Smell Kit</h1>
            </div>
        )
    }
}

export default SmellKit