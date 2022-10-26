import React from 'react';

import styles from './input.module.css';

type Props = {
   label: string;
   currentValue: string;
};

export const Input: React.FC<Props> = ({ label, currentValue }) => {
   return (
      <div className={styles.input_container}>
         <div className={`${styles.input} `}>
            <label data-testid="label" htmlFor="">
               {label}
            </label>
            <input
               data-testid="current-value"
               placeholder={currentValue}
               type="text"
            />
         </div>
      </div>
   );
};
