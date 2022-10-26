import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { VehicleNavigation } from '../../../src/presentation/components/vehicle-navigation';

let vehicleNavigation: RenderResult;

describe('vehicle search bar component', () => {
   beforeEach(() => {
      vehicleNavigation = render(<VehicleNavigation />);
   });

   it('show search bar', () => {
      expect(vehicleNavigation.getByTestId('search-bar')).toBeInTheDocument();
   });

   it('show filter button', () => {
      expect(
         vehicleNavigation.getByTestId('filter-button')
      ).toBeInTheDocument();
   });

   it('show add button', () => {
      expect(vehicleNavigation.getByTestId('add-button')).toBeInTheDocument();
   });
});
