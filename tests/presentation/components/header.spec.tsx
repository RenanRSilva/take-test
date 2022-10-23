import { Header } from '../../../src/presentation/components/header/Header'
import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

let header: RenderResult

describe('Header Component', () => {
  beforeEach(() => {
    header = render(<Header />)
  })

  it('render dryve logo', () => {
    expect(header.getByTestId('dryve-logo')).toBeInTheDocument()
  })

  it('render home icon', () => {
    expect(header.getByTestId('home-icon')).toBeInTheDocument()
  })

  it('render notification icon', () => {
    expect(header.getByTestId('notification-icon')).toBeInTheDocument()
  })

  it('render notification icon', () => {
    expect(header.getByTestId('notification-icon')).toBeInTheDocument()
  })

  it('render settings icon', () => {
    expect(header.getByTestId('settings-icon')).toBeInTheDocument()
  })
})
