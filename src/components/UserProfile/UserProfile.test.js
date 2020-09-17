import React from 'react';
import UserProfile from './UserProfile'
import { render, screen } from '@testing-library/react'

describe('User Profile', () => {
    it('Should display correct content when rendered', () => {
        render(<UserProfile />)

        const userProfileHeading = screen.getByRole('heading', { name: 'User Profile' })

        expect(userProfileHeading).toBeInTheDocument();
    })

    it('Should have a form where users can update their information', () => {
        render(<UserProfile />)

        const nameInput = screen.getByPlaceholderText('Enter name here')
        const phoneNumberInput = screen.getByPlaceholderText('Enter phone number here')
        const submitButton = screen.getByRole('button', { name: 'Submit' })

        expect(nameInput).toBeInTheDocument()
        expect(phoneNumberInput).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()
    })
})