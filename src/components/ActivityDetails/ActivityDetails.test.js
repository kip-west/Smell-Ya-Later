import React from 'react'
import ActivityDetails from './ActivityDetails'
import Moment from 'react-moment'
import { render, screen } from '@testing-library/react'

describe('ActivityDetails', () => {
    it('Should render the correct content', () => {
        render(<ActivityDetails item='Lemon' rating='3' date={<Moment>{'2020-01-01T16:03:33.000Z'}</Moment>} />)
        
        const rating = screen.getByText('Your Rating: 3', { exact: false })
        const date = screen.getByRole('heading', { name: 'Monday, Jan 1, 2020 at 9:03 AM' })

        expect(rating).toBeInTheDocument()
        expect(date).toBeInTheDocument()
    })
})