import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
    it('Should render the correct content', () => {
        render(<Header />)

        const headerText = screen.getByRole('heading', { name: 'Smell Ya Later' })
        const homeButton = screen.getByRole('button', { name: 'Home' })
        const userProfileButton = screen.getByRole('button', { name: 'User Profile' })
        const activityButton = screen.getByRole('button', { name: 'Activity' })

        expect(headerText).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
        expect(userProfileButton).toBeInTheDocument();
        expect(activityButton).toBeInTheDocument();
    })
})