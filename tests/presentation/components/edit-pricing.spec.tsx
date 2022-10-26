import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import { EditPricing } from '../../../src/presentation/components/edit-pricing';
let editPricing: RenderResult;

describe('contact component', () => {
   beforeEach(() => {
      editPricing = render(<EditPricing vehiclePrice={80000} />);
   });

   it('show kbb price range', () => {
      expect(editPricing.getByTestId('price-range-kbb')).toBeInTheDocument();
   });

   it('show price for private', () => {
      expect(editPricing.getByTestId('price-for-private')).toBeInTheDocument();
   });
});
