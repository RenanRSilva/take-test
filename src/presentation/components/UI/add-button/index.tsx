import React from 'react';

import plusSign from '../../../icons/edit-vehicle/plus-sign.svg';

import styles from './add-button.module.css';

export const AddButton: React.FC = () => {
   const handleClick = (e) => {
      e.preventDefault();
   };

   return (
      <button onClick={handleClick} className={styles.add_button}>
         <img src={plusSign} alt="Adicionar" /> Adicionar
      </button>
   );
};
