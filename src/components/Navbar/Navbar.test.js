import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Navbar', () => {
  it('renders Navbar component correctly', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Food Mentor')).toBeInTheDocument();

    expect(screen.getByAltText('Left Icon')).toBeInTheDocument();

    expect(screen.getByAltText('Food Mentor Image')).toBeInTheDocument();
  });

  it('calls navigate with the correct parameter when left icon is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<Navbar />);

    fireEvent.click(screen.getByAltText('Left Icon'));

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
