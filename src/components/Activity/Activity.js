import React, { Component } from 'react'
import './Activity.css'
import { getAllMessages } from '../../apiCalls'

class Activity extends Component {
    constructor() {
        super();
        this.state = {
            messages: {},
            error: ''
        }
    }

    async componentDidMount() {
        try {
            const data = await getAllMessages()
            this.setState({ messages: data.messages })
        } catch (error) {
            this.setState({ error: error })
        }
    }

    render() {
        return(
            <div className='Activity-container'>
                <h1>Recent Activity</h1>
            </div>
        )
    }
}

export default Activity