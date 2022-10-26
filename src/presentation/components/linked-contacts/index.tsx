import React from 'react';

import { Contact } from '../contact/';
import { AddButton } from '../UI/add-button';
import { SectionTitle } from '../UI/section-title';
import { SideContainer } from '../UI/side-container';

import { contacts } from '../../../main/usecases/contact-mock';

import styles from './linked-contacts.module.css';

export const LinkedContacts: React.FC = () => {
   return (
      <>
         <SectionTitle sectionTitle="Contatos vinculados" />
         <SideContainer>
            <div className={styles.linked_contacts}>
               {contacts.map((contact) => (
                  <Contact
                     firstLetters={contact.name}
                     name={contact.name}
                     email={contact.email}
                     phoneNumber={contact.phoneNumber}
                  />
               ))}
            </div>
            <div className={styles.button_row}>
               <button className={styles.see_all_button}>Ver Todos</button>
               <AddButton />
            </div>
         </SideContainer>
      </>
   );
};
