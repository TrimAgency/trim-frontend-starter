import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFoundPage from '@/pages/404'

describe('404', () => {
  it('should render a 404 page', () => {
    render(<NotFoundPage />)

    const heading = screen.getByText(/not found/i)
    expect(heading).toBeInTheDocument()
  })
})
