import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';

import { VehicleRow } from '../../../src/presentation/components/vehicle-row';
import { mockVehicle } from '../../data/mocks/mock-selected-vehicle';

let vehicle: RenderResult;

describe('vehicles table component', () => {
   const mockedVehicle = mockVehicle();

   beforeEach(() => {
      vehicle = render(
         <table>
            <tbody>
               <VehicleRow
                  name={mockedVehicle.name}
                  modelYear={mockedVehicle.modelYear}
                  manufacturingYear={mockedVehicle.manufacturingYear}
                  fuel={mockedVehicle.fuel}
                  mileage={mockedVehicle.mileage}
                  price={mockedVehicle.price}
                  modelName={mockedVehicle.modelName}
                  picture={mockedVehicle.picture}
                  onClick={mockedVehicle.onClick}
                  id={mockedVehicle.id}
                  brand_name={mockedVehicle.brand_name}
               />
            </tbody>
         </table>
      );
   });

   it('show vehicle image', () => {
      expect(vehicle.getByTestId('vehicle-image')).toBeInTheDocument();
   });

   it('show vehicle model name', () => {
      expect(vehicle.getByTestId('model-name')).toBeInTheDocument();
   });

   it('show vehicle name', () => {
      expect(vehicle.getByTestId('vehicle-name')).toBeInTheDocument();
   });

   it('show vehicle year', () => {
      expect(vehicle.getByTestId('vehicle-year')).toBeInTheDocument();
   });

   it('show vehicle mileage', () => {
      expect(vehicle.getByTestId('vehicle-mileage')).toBeInTheDocument();
   });

   it('show vehicle price', () => {
      expect(vehicle.getByTestId('vehicle-price')).toBeInTheDocument();
   });
});
