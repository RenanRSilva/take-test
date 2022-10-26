import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import { Select } from '../../../src/presentation/components/UI/select';
import { faker } from '@faker-js/faker';
let select: RenderResult;

describe('select component', () => {
   beforeEach(() => {
      select = render(
         <Select
            currentValue={faker.datatype.string(5)}
            label={faker.datatype.string(4)}
         />
      );
   });

   it('show input label', () => {
      expect(select.getByTestId('label')).toBeInTheDocument();
   });

   it('show current value', () => {
      expect(select.getByTestId('current-value')).toBeInTheDocument();
   });
});
