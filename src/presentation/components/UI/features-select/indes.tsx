import React from 'react';

import styles from './features-select.module.css';

type Props = {
   label: string;
};

export const FeaturesSelect: React.FC<Props> = ({ label }) => {
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
