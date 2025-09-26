

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Gallery from './Gallery';

jest.useFakeTimers();

describe('Gallery Slider Component', () => {
  beforeEach(() => {
    render(<Gallery />);
  });

  test('renders first slide initially', () => {
    expect(screen.getByAltText('Image A')).toBeInTheDocument();
    expect(screen.getByText('Image A')).toBeInTheDocument();
  });

  test('next button advances the slide', () => {
    const nextButton = screen.getByRole('button', { name: /›/i });
    fireEvent.click(nextButton);
    expect(screen.getByAltText('Image B')).toBeInTheDocument();
    expect(screen.getByText('Image B')).toBeInTheDocument();
  });

  test('prev button goes to previous slide', () => {
    const prevButton = screen.getByRole('button', { name: /‹/i });
    fireEvent.click(prevButton);
    // Since initial is 0, prev should wrap to last slide
    expect(screen.getByAltText('Image D')).toBeInTheDocument();
    expect(screen.getByText('Image D')).toBeInTheDocument();
  });

  test('pagination dots navigate to correct slide', () => {
    const dots = screen.getAllByRole('button', { name: /Go to slide/i });
    fireEvent.click(dots[2]); // Go to slide 3 (index 2)
    expect(screen.getByAltText('Image C')).toBeInTheDocument();
    expect(screen.getByText('Image C')).toBeInTheDocument();
  });

  test('auto slide changes every 3 seconds', () => {
    expect(screen.getByAltText('Image A')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByAltText('Image B')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByAltText('Image C')).toBeInTheDocument();
  });
});
