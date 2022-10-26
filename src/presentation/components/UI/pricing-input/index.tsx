import React from 'react';

import styles from './pricing-input.module.css';

type Props = {
   label: string;
   currentValue: string;
};

export const PricingInput: React.FC<Props> = ({ label, currentValue }) => {
   return (
      <div className={styles.input_container}>
         <div className={`${styles.input} `}>
            <label htmlFor="">{label}</label>
            <input
               data-testid="pricing-input"
               placeholder={currentValue}
               type="text"
            />
         </div>
      </div>
   );
};
