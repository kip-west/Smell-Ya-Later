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

    checkMessageBody(message) {
        const body = message.body;
        const splitBody = body.split(' ')
        const lastCharacter = parseInt(splitBody[1])
        const firstWord = splitBody[0]
        console.log(firstWord, lastCharacter)
        const items = ['Candle', 'Eucalyptus', 'Lemon', 'Rosemary']
        if(items.includes(firstWord)) {
            return(lastCharacter > 0 && lastCharacter < 6)
        }
    }

    filterInboundMessages() {
        const inboundMessages = this.state.messages.filter(message => {
            return message.direction === 'inbound'
        })
        return inboundMessages
    }

    createList(messages) {
        return messages.map(message => {
            if(this.checkMessageBody(message)) {
                return(<li>{message.body}, {message.dateCreated}</li>)
            }
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