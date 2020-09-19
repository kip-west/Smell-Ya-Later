import React from 'react';
import Activity from './Activity'
import { render, screen } from '@testing-library/react'
import { getAllMessages } from '../../apiCalls'
jest.mock('../../apiCalls')

describe('Activity', () => {
    it('Should render the correct information', () => {
        render(<Activity />)

        const heading = screen.getByRole('heading', { name: 'Recent Activity' })

        expect(heading).toBeInTheDocument()
    })

    it('Should call the getAllMessages method on display', () => {
        getAllMessages.mockResolvedValueOnce({
            messages: [
                {
                    body: 'Lemon 3',
                    direction: 'inbound',
                    dateCreate: '2020-09-15T17:00:00.000Z'
                },
                {
                    body: 'Candle 2',
                    direction: 'inbound',
                    dateCreate: '2020-09-15T17:00:00.000Z'
                },
                {
                    body: 'Rosemary 3',
                    direction: 'inbound',
                    dateCreate: '2020-09-15T17:00:00.000Z'
                },
                {
                    body: 'Eucalyptus 1',
                    direction: 'inbound',
                    dateCreate: '2020-09-15T17:00:00.000Z'
                }
            ]
        })

        render(<Activity />)

        const lemonHeading = screen.getByRole('heading', { name: 'Lemon' })
        const candleHeading = screen.getByRole('heading', { name: 'Candle' })
        const rosemaryHeading = screen.getByRole('heading', { name: 'Rosemary' })
        const eucalyptusHeading = screen.getByRole('heading', { name: 'Eucalyptus' })

        expect(lemonHeading).toBeInTheDocument()
        expect(candleHeading).toBeInTheDocument()
        expect(rosemaryHeading).toBeInTheDocument()
        expect(eucalyptusHeading).toBeInTheDocument()
    })
})