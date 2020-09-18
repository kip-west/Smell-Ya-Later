import React from 'react';
import SmellKit from './SmellKit';
import { render, screen, waitFor } from '@testing-library/react'
import { fetchItems } from '../../apiCalls'
jest.mock('../../apiCalls')

describe('SmellKit', () => {
    it('Should render the correct content on load', () => {
        render(<SmellKit />);
        
        const heading = screen.getByRole('heading', { name: 'Your Smell Kit' });

        expect(heading).toBeInTheDocument();
    })

    it('Should render one item card for each fetched item', async () => {
        fetchItems.mockResolvedValue({
            items: {
                1: {
                    id: 1,
                    name: 'Candle',
                    image: 'https://image.candle.png'
                },
                2: {
                    id: 2,
                    name: 'Rosemary',
                    image: 'https://image.rosemary.png'
                }
            }
        })

        render(<SmellKit />)

        const card1Heading = await waitFor(() => screen.getByRole('heading', { name: 'Candle' }))
        const card1Image = await waitFor(() => screen.getByAltText('Candle'))
        const card2Heading = await waitFor(() => screen.getByRole('heading', { name: 'Rosemary' }))
        const card2Image = await waitFor(() => screen.getByAltText('Rosemary'))

        expect(card1Heading).toBeInTheDocument();
        expect(card1Image).toBeInTheDocument();
        expect(card2Heading).toBeInTheDocument();
        expect(card2Image).toBeInTheDocument();
    })
})