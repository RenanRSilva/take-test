import React from 'react';

import { ContactModel } from '../../../domain/models/contact-model';
import { useFirstLetters } from '../../../presentation/hooks/use-first-letters';

import styles from './contact.style.module.css';

export const Contact: React.FC<ContactModel> = ({
   firstLetters,
   name,
   email,
   phoneNumber,
}) => {
   return (
      <div className={styles.contact}>
         <div className={styles.pic}>{useFirstLetters(firstLetters)}</div>
         <div>
            <h4 data-testid="contact-name">{name}</h4>
            <p data-testid="contact-email">{email}</p>
            <p data-testid="contact-phone-number">{phoneNumber}</p>
         </div>
      </div>
   );
};
