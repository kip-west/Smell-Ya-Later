import React from 'react';
import UserProfile from './UserProfile'
import { render, screen } from '@testing-library/react'

describe('User Profile', () => {
    it('Should display correct content when rendered', () => {
        render(<UserProfile />)

        const userProfileHeading = screen.getByRole('heading', { name: 'User Profile!' })

        expect(userProfileHeading).toBeInTheDocument();
    })
})