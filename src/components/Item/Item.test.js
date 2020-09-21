import React from 'react';
import Item from './Item'
import { render, screen, fireEvent } from '@testing-library/react'
import { sendMessage } from '../../apiCalls'
jest.mock('../../apiCalls')

describe('Item', () => {
    it('Should render the correct content on display', () => {
        render(
            <Item id={999} name='Candle' imageUrl='www.image.candle.png' />
        )

        const itemName = screen.getByRole('heading', { name: 'Candle' })
        const image = screen.getByAltText('Candle')

        expect(itemName).toBeInTheDocument();
        expect(image).toBeInTheDocument();
    })

    it('Should make a network request when a item is clicked on', () => {
        render(<Item id={999} name='Candle' imageUrl='www.image.candle.png' isLoggedIn={true} user={{ name: 'Jake', phoneNumber: '+15555555555'}} />)

        const itemCard = screen.getByAltText('Candle')
        fireEvent.click(itemCard)

        expect(sendMessage).toBeCalledTimes(1)
        expect(sendMessage).toBeCalledWith({
            "to": "+15555555555",
            "body": "Hi Jake! Please concentrate on taking gentle sniffs of your Candle for 20 seconds. Be as attentive as you can and try to block out other intrusive thoughts. Please reply with the item name & 1 (I didn't smell the Candle at all) to 5 (I could smell the Candle completely) score when you're done."
        })
    })
})