import React from 'react';
import Item from './Item'
import { render, screen } from '@testing-library/react'

describe('Item', () => {
    it('Should render the correct content on display', () => {
        render(<Item />)

        const itemName = screen.getByRole('heading', { name: 'Item1!' })

        expect(itemName).toBeInTheDocument();
    })
})