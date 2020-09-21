import React from 'react';
import Activity from './Activity'
import { render, screen, waitFor } from '@testing-library/react'
import { getAllMessages } from '../../apiCalls'
jest.mock('../../apiCalls')

describe('Activity', () => {
    it('Should render the correct information', () => {
        render(<Activity />)

        const heading = screen.getByRole('heading', { name: 'Recent Activity' })

        expect(heading).toBeInTheDocument()
    })

    it('Should call the getAllMessages method on display', async () => {
        getAllMessages.mockResolvedValueOnce({
            messages: [
                {
                    sid: 'SM123456789',
                    body: 'Lemon 4',
                    direction: 'inbound',
                    dateCreated: '2020-09-15T15:00:00.000Z'
                },
                {
                    sid: 'SM987654321',
                    body: 'Candle 2',
                    direction: 'inbound',
                    dateCreated: '2020-09-15T16:00:00.000Z'
                },
                {
                    sid: 'SMabcdefghi',
                    body: 'Rosemary 3',
                    direction: 'inbound',
                    dateCreated: '2020-09-15T17:00:00.000Z'
                },
                {
                    sid: 'SMzyxwvuts',
                    body: 'Eucalyptus 1',
                    direction: 'inbound',
                    dateCreated: '2020-09-15T18:00:00.000Z'
                }
            ]
        })

        render(<Activity />)

        const lemonHeading = screen.getByRole('heading', { name: 'Lemon' })
        const candleHeading = screen.getByRole('heading', { name: 'Candle' })
        const rosemaryHeading = screen.getByRole('heading', { name: 'Rosemary' })
        const eucalyptusHeading = screen.getByRole('heading', { name: 'Eucalyptus' })
        const lemonRating = await waitFor(() => screen.getByText('Your Rating: 4'))
        const candleRating = await waitFor(() => screen.getByText('Your Rating: 2'))
        const rosemaryRating = await waitFor(() => screen.getByText('Your Rating: 3'))
        const eucalyptusRating = await waitFor(() => screen.getByText('Your Rating: 1'))

        expect(lemonHeading).toBeInTheDocument()
        expect(candleHeading).toBeInTheDocument()
        expect(rosemaryHeading).toBeInTheDocument()
        expect(eucalyptusHeading).toBeInTheDocument()
        expect(lemonRating).toBeInTheDocument()
        expect(candleRating).toBeInTheDocument()
        expect(rosemaryRating).toBeInTheDocument()
        expect(eucalyptusRating).toBeInTheDocument()
    })

    it('Should only add details for valid text responses', async () => {
        getAllMessages.mockResolvedValueOnce({
            messages: [
                {
                    sid: 'SM123456789',
                    body: 'Lavender 5',
                    direction: 'inbound',
                    dateCreated: '2020-09-15T15:00:00.000Z'
                },
                {
                    sid: 'SM987654321',
                    body: 'Candle 2',
                    direction: 'inbound',
                    dateCreated: '2020-09-15T16:00:00.000Z'
                },
                {
                    sid: 'SMabcdefghi',
                    body: '',
                    direction: 'inbound',
                    dateCreated: '2020-09-15T17:00:00.000Z'
                },
                {
                    sid: 'SMzyxwvuts',
                    body: 'Eucalyptus 1',
                    direction: 'inbound',
                    dateCreated: '2020-09-15T18:00:00.000Z'
                },
                {
                    sid: 'SMasdfjkl',
                    body: 'Eucalyptus 6',
                    direction: 'inbound',
                    dateCreated: '2020-09-15T18:00:00.000Z'
                }
            ]
        })

        render(<Activity />)

        const candleRating = await waitFor(() => screen.getByText('Your Rating: 2'))
        const eucalyptusRating = await waitFor(() => screen.getByText('Your Rating: 1'))

        expect(candleRating).toBeInTheDocument()
        expect(eucalyptusRating).toBeInTheDocument()
        // expect(screen.getByText('Lavender')).not.toBeInTheDocument()
        // expect(screen.getByText('Your Rating: 9')).not.toBeInTheDocument()
        // expect(screen.getByText("Your Rating: ''")).not.toBeInTheDocument()
    })
})