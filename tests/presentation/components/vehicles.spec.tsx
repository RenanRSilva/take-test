import React from 'react'
import {  render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'

import { mockVehicles } from './mocks/mock-vehicles'
import {VehiclesTable} from '../../../src/presentation/components/vehicles-table/vehicles-table'

let vehiclesTable: RenderResult

describe('vehicles table component', () => {
  beforeEach(() => {
    vehiclesTable = render(<VehiclesTable vehicleList={mockVehicles} />)
  })

  it('show vehicle image', () => {
    expect(vehiclesTable.queryByTestId('vehicle-image')).toBeInTheDocument()
  })

  it('show vehicle model name', () => {
    expect(vehiclesTable.queryByTestId('model-name')).toBeInTheDocument()
  })

  it('show vehicle name', () => {
    expect(vehiclesTable.queryByTestId('vehicle-name')).toBeInTheDocument()
  })

  it('show vehicle year', () => {
    expect(vehiclesTable.queryByTestId('vehicle-year')).toBeInTheDocument()
  })

  it('show vehicle mileage', () => {
    expect(vehiclesTable.queryByTestId('vehicle-mileage')).toBeInTheDocument()
  })

  it('show vehicle price', () => {
    expect(vehiclesTable.queryByTestId('vehicle-price')).toBeInTheDocument()
  })

  it('show table head', () => {
        expect(vehiclesTable.queryByTestId('table-head')).toBeInTheDocument()

  })
})
