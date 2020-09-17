import React from 'react';
import Item from './Item'
import { render, screen } from '@testing-library/react'

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
})