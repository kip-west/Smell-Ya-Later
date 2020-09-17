import React from 'react';
import SmellKit from './SmellKit';
import { render, screen } from '@testing-library/react'

describe('SmellKit', () => {
    it('Should render the correct content on load', () => {
        render(<SmellKit />);
        
        const heading = screen.getByRole('heading', { name: 'Your Smell Kit' });

        expect(heading).toBeInTheDocument();
    })
})