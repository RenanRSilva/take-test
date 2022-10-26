import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import { Input } from '../../../src/presentation/components/UI/input';
import { faker } from '@faker-js/faker';
let input: RenderResult;

describe('input component', () => {
   beforeEach(() => {
      input = render(
         <Input
            currentValue={faker.datatype.string(5)}
            label={faker.datatype.string(4)}
         />
      );
   });

   it('show input label', () => {
      expect(input.getByTestId('label')).toBeInTheDocument();
   });

   it('show current value', () => {
      expect(input.getByTestId('current-value')).toBeInTheDocument();
   });
});
