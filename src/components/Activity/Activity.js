import React, { Component } from 'react'
import './Activity.css'
import { getAllMessages } from '../../apiCalls'

class Activity extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            error: ''
        }
    }

    async componentDidMount() {
        try {
            const data = await getAllMessages()
            const messages = data.messages.map(message => { 
                return({ body: message.body, dateCreated: message.dateCreated, direction: message.direction })
            })
            this.setState({ messages: messages })
        } catch (error) {
            this.setState({ error: error })
        }
    }

    filterInboundMessages() {
        const inboundMessages = this.state.messages.filter(message => message.direction === 'inbound')
        return inboundMessages
    }

    createList(messages) {
        return messages.map(message => {
            return(<li>{message.body}, {message.dateCreated}</li>)
        })
    }

    render() {
        return(
            <div className='Activity-container'>
                <h1>Recent Activity</h1>
                {this.state.messages && 
                    <ul>
                        {this.createList(this.filterInboundMessages())}
                    </ul>
                }
            </div>
        )
    }
}

export default Activity