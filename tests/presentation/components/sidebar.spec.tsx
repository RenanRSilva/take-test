import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Sidebar } from '../../../src/presentation/components/sidebar';

let sidebar: RenderResult;

describe('sidebar component', () => {
   beforeEach(() => {
      sidebar = render(<Sidebar />);
   });

   it('show close button when its open', () => {
      expect(sidebar.getByTestId('close-icon')).toBeInTheDocument();
      expect(sidebar.queryByTestId('open-icon')).not.toBeInTheDocument();
   });

   it('show open button when its close', () => {
      const closeButton = sidebar.getByTestId('handle-sidebar-button');

      fireEvent.click(closeButton);
      expect(sidebar.queryByTestId('open-icon')).toBeInTheDocument();
      expect(sidebar.queryByTestId('close-icon')).not.toBeInTheDocument();
   });

   it('hide text when sidebar is closed', () => {
      const closeButton = sidebar.getByTestId('handle-sidebar-button');

      fireEvent.click(closeButton);
      expect(sidebar.queryByTestId('menu-text')).not.toBeInTheDocument();
   });
});
