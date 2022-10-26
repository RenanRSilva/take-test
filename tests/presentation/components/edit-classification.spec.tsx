import { render, RenderResult, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import { EditClassification } from '../../../src/presentation/components/edit-classification';

let editClassification: RenderResult;

describe('Edit Classification Component', () => {
   beforeEach(() => {
      editClassification = render(<EditClassification />);
   });

   it('show classification buttons', () => {
      expect(
         editClassification.getByTestId('classification-a')
      ).toBeInTheDocument();
      expect(
         editClassification.getByTestId('classification-b')
      ).toBeInTheDocument();
      expect(
         editClassification.getByTestId('classification-c')
      ).toBeInTheDocument();
      expect(
         editClassification.getByTestId('classification-d')
      ).toBeInTheDocument();
      expect(
         editClassification.getByTestId('classification-e')
      ).toBeInTheDocument();
   });

   it('show condition buttons', () => {
      expect(
         editClassification.getByTestId('condition-razoavel')
      ).toBeInTheDocument();
      expect(
         editClassification.getByTestId('condition-bom')
      ).toBeInTheDocument();
      expect(
         editClassification.getByTestId('condition-excelente')
      ).toBeInTheDocument();
   });
});
