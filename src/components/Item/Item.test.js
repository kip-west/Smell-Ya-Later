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
        const button = screen.getByRole('button', { name: 'Send Text' })

        expect(itemName).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    it('Should make a network request when a item is clicked on', () => {
        render(<Item id={999} name='Candle' imageUrl='www.image.candle.png' />)

        const button = screen.getByRole('button', { name: 'Send Text' })
        fireEvent.click(button)

        expect(sendMessage).toBeCalledTimes(1)
        expect(sendMessage).toBeCalledWith({
            "to": "+19102625254",
            "body": "Candle"
        })
    })
})