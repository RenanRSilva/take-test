import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import { Contact } from '../../../src/presentation/components/contact';
let contact: RenderResult;
import { contacts } from '../../data/mocks/mock-contact';

describe('contact component', () => {
   beforeEach(() => {
      contact = render(
         <Contact
            firstLetters={contacts[0].name}
            name={contacts[0].name}
            email={contacts[0].email}
            phoneNumber={contacts[0].phoneNumber}
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
