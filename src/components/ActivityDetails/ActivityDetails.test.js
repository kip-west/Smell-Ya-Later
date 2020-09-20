import React from 'react'
import ActivityDetails from './ActivityDetails'
import { render, screen } from '@testing-library/react'

describe('ActivityDetails', () => {
    it('Should render the correct content', () => {
        render(<ActivityDetails item='Lemon' rating={3} date='2020/01/01' />)

        const heading = screen.getByRole('heading', { name: 'Lemon' })
        const rating = screen.getByRole('heading', { name: 'Your Rating: 3' })
        const date = screen.getByRole('heading', { name: 'on 2020/01/01' })
        const deleteButton = screen.getByRole('button', { name: 'Delete' })

        expect(heading).toBeInTheDocument()
        expect(rating).toBeInTheDocument()
        expect(date).toBeInTheDocument()
        expect(deleteButton).toBeInTheDocument()
    })
})