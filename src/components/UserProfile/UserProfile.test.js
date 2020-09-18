import React from 'react';
import UserProfile from './UserProfile'
import { render, screen, fireEvent } from '@testing-library/react'

describe('User Profile', () => {
    it('Should display correct content when rendered', () => {
        render(<UserProfile />)

        const userProfileHeading = screen.getByRole('heading', { name: 'User Profile' })

        expect(userProfileHeading).toBeInTheDocument();
    })

    describe('Update Contact Information Form', () => {
        it('Should have a form where users can update their information', () => {
            render(<UserProfile />)
    
            const nameInput = screen.getByPlaceholderText('Enter name here')
            const phoneNumberInput = screen.getByPlaceholderText('Enter phone number here')
            const submitButton = screen.getByRole('button', { name: 'Submit' })
    
            expect(nameInput).toBeInTheDocument()
            expect(phoneNumberInput).toBeInTheDocument()
            expect(submitButton).toBeInTheDocument()
        })

        it('Should update it\'s own values on change', () => {
            render(<UserProfile />)

            const nameInput = screen.getByPlaceholderText('Enter name here')
            const phoneInput = screen.getByPlaceholderText('Enter phone number here')

            fireEvent.change(nameInput, { target: { value:  'Jake'} })
            fireEvent.change(phoneInput, { target: { value: '+1(555)-555-5555' }})

            expect(nameInput.value).toBe('Jake')
            expect(phoneInput.value).toBe('+1(555)-555-5555')
        })
    })
})