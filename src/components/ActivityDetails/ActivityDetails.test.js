import React from 'react'
import ActivityDetails from './ActivityDetails'
import Moment from 'react-moment'
import { fireEvent, render, screen } from '@testing-library/react'

describe('ActivityDetails', () => {
    it('Should render the correct content', () => {
        render(<ActivityDetails item='Lemon' rating='3' date={<Moment>{'2020-01-01T16:03:33.000Z'}</Moment>} />)
        
        const rating = screen.getByText('Your Rating: 3', { exact: false })
        const date = screen.getByRole('heading', { name: 'Monday, Jan 1, 2020 at 9:03 AM' })
        const deleteButton = screen.getByRole('button')

        expect(rating).toBeInTheDocument()
        expect(date).toBeInTheDocument()
        expect(deleteButton).toBeInTheDocument()
    })

    it('Should call a method when the delete button is clicked', () => {
        const mockDeleteActivityDetail = jest.fn()
        render(<ActivityDetails id='999' item='Lemon' rating='3' date ={<Moment>{ '2020-01-01T16:03:33.000Z'}</Moment>} deleteActivityDetail={mockDeleteActivityDetail}/>)

        const rating = screen.getByText('Your Rating: 3', { exact: false })
        const date = screen.getByRole('heading', { name: 'Monday, Jan 1, 2020 at 9:03 AM' })
        const deleteButton = screen.getByRole('button')
        expect(rating).toBeInTheDocument()
        expect(date).toBeInTheDocument()
        expect(deleteButton).toBeInTheDocument()

        fireEvent.click(deleteButton)
        expect(mockDeleteActivityDetail).toBeCalledTimes(1)
        expect(mockDeleteActivityDetail).toBeCalledWith('999')
    })
})