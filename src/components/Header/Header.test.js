import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
    it('Should render the correct content', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const headerText = screen.getByRole('heading', { name: 'Smell Ya Later' })
        const homeButton = screen.getByRole('link', { name: 'Home' })
        const userProfileButton = screen.getByRole('link', { name: 'User Profile' })
        const activityButton = screen.getByRole('link', { name: 'Activity' })

        expect(headerText).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
        expect(userProfileButton).toBeInTheDocument();
        expect(activityButton).toBeInTheDocument();
    })
})