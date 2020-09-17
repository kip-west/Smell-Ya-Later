import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

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

  it('Should route to the appropriate page when each NavLink is clicked', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    let smellKitHeading = screen.getByRole('heading', { name: 'Your Smell Kit' })
    expect(smellKitHeading).toBeInTheDocument();
    
    const userProfileButton = screen.getByRole('link', { name: 'User Profile' })
    fireEvent.click(userProfileButton)

    const userProfileHeading = screen.getByRole('heading', { name: 'User Profile!' })
    expect(userProfileHeading).toBeInTheDocument();

    const activityButton = screen.getByRole('link', { name: 'Activity' })
    fireEvent.click(activityButton)

    const activityHeading = screen.getByRole('heading', { name: 'Recent Activity!' })
    expect(activityHeading).toBeInTheDocument();

    const homeButton = screen.getByRole('link', { name: 'Home' });
    fireEvent.click(homeButton);
    
    smellKitHeading = screen.getByRole('heading', { name: 'Your Smell Kit' })
    expect(smellKitHeading).toBeInTheDocument();
  })
})
