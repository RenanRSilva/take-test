import React from 'react'
import {  render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'

import { mockVehiclesList } from '../../data/mocks/mock-vehicles'
import {VehiclesTable} from '../../../src/presentation/components/vehicles-table/vehicles-table'

let vehiclesTable: RenderResult

describe('vehicles table component', () => {
  beforeEach(() => {
    vehiclesTable = render(<VehiclesTable vehicleList={mockVehiclesList()} />)
  })

  it('show vehicle image', () => {
    expect(vehiclesTable.queryAllByTestId('vehicle-image')).toHaveLength(3)
  })

  it('show vehicle model name', () => {
    expect(vehiclesTable.queryAllByTestId('model-name')).toHaveLength(3)
  })

  it('show vehicle name', () => {
    expect(vehiclesTable.queryAllByTestId('vehicle-name')).toHaveLength(3)
  })

  it('show vehicle year', () => {
    expect(vehiclesTable.queryAllByTestId('vehicle-year')).toHaveLength(3)
  })

  it('show vehicle mileage', () => {
    expect(vehiclesTable.queryAllByTestId('vehicle-mileage')).toHaveLength(3)
  })

  it('show vehicle price', () => {
    expect(vehiclesTable.queryAllByTestId('vehicle-price')).toHaveLength(3)
  })

  it('show table head', () => {
    expect(vehiclesTable.getByTestId('table-head')).toBeInTheDocument()
  })
})
