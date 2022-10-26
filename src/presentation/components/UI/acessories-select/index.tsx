import React from 'react';

import styles from './acessories-select.module.css';

type Props = {
   label: string;
};

export const AccessoriesSelect: React.FC<Props> = ({ label }) => {
   return (
      <div className={styles.select_container}>
         <div className={` ${styles.select}`}>
            <label htmlFor="">{label}</label>
            <select name="" id="">
               <option value=""></option>
            </select>
         </div>
      </div>
   );
};
