import React from 'react'
import ActivityDetails from './ActivityDetails'
import { render, screen } from '@testing-library/react'

describe('ActivityDetails', () => {
    it('Should render the correct content', () => {
        render(<ActivityDetails item='Lemon' rating={3} date='2020/01/01' />)

        const rating = screen.getByText('Your Rating: 3', { exact: false })
        const date = screen.getByRole('heading', { name: 'from 2020/01/01' })

        expect(rating).toBeInTheDocument()
        expect(date).toBeInTheDocument()
    })
})