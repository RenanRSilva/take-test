import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import { Contact } from '../../../src/presentation/components/contact';
let contact: RenderResult;
import { mockContact } from '../../data/mocks/mock-contact';

describe('contact component', () => {
   beforeEach(() => {
      const mockedContact = mockContact()

      contact = render(
         <Contact
            firstLetters={mockedContact.name}
            name={mockedContact.name}
            email={mockedContact.email}
            phoneNumber={mockedContact.phoneNumber}
         />
      );
   });

   it('show contact name', () => {
      expect(contact.getByTestId('contact-name'));
   });

   it('show contact email', () => {
      expect(contact.getByTestId('contact-email'));
   });

   it('show contact phone number', () => {
      expect(contact.getByTestId('contact-phone-number'));
   });
});
