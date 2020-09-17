import React from 'react';
import SmellKit from './SmellKit';
import { render, screen } from '@testing-library/react'

describe('SmellKit', () => {
    it('Should render the correct content on load', () => {
        render(<SmellKit />);
        
        const heading = screen.getByRole('heading', { name: 'Your Smell Kit' });

        expect(heading).toBeInTheDocument();
    })

    it('Should render one item card for each item in state', () => {
        render(<SmellKit />)

        const card1Heading = screen.getByRole('heading', { name: 'Candle' })
        const card1Image = screen.getByAltText('Candle')

        expect(card1Heading).toBeInTheDocument();
        expect(card1Image).toBeInTheDocument();
    })
})