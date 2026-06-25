import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PagePlaceholder from './index'

describe('PagePlaceholder', () => {
  it('renders the title', () => {
    render(<PagePlaceholder title="CineView" subtitle="Coming soon" />)
    expect(screen.getByText('CineView')).toBeInTheDocument()
    expect(screen.getByText('Coming soon')).toBeInTheDocument()
  })
})