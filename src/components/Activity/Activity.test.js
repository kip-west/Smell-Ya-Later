import React from 'react';
import Activity from './Activity'
import { render, screen } from '@testing-library/react'

describe('Activity', () => {
    it('Should render the correct information', () => {
        render(<Activity />)

        const heading = screen.getByRole('heading', { name: 'Activity' })
    })

    it('Should call the getAllMessages method on display', () => {
        render(<Activity />)
    })
})