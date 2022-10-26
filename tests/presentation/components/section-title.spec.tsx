import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import { SectionTitle } from '../../../src/presentation/components/UI/section-title';
import { faker } from '@faker-js/faker';
let input: RenderResult;

describe('input component', () => {
   beforeEach(() => {
      input = render(<SectionTitle sectionTitle={faker.datatype.string(5)} />);
   });

   it('show section title', () => {
      expect(input.getByTestId('section-title')).toBeInTheDocument();
   });
});
