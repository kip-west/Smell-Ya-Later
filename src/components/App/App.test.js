import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render the correct content on page load', () => {
    render(<App />)

    const headerText = screen.getByRole('heading', { name: 'Smell Ya Later' })
    const homeButton = screen.getByRole('link', { name: 'Home' })
    const userProfileButton = screen.getByRole('link', { name: 'User Profile' })
    const activityButton = screen.getByRole('link', { name: 'Activity' })
    const smellKitHeading = screen.getByRole('heading', { name: 'Your Smell Kit' })

    expect(headerText).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(userProfileButton).toBeInTheDocument();
    expect(activityButton).toBeInTheDocument();
    expect(smellKitHeading).toBeInTheDocument();
  })
})
