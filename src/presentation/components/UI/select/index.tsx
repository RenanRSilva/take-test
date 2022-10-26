import React from 'react';

import styles from './select.module.css';

type Props = {
   label: string;
   currentValue: string;
};

export const Select: React.FC<Props> = ({ label, currentValue }) => {
   return (
      <div className={styles.select_container}>
         <div className={` ${styles.select}`}>
            <label data-testid="label" htmlFor="">
               {label}
            </label>
            <select name="" id="">
               <option data-testid="current-value" value="">
                  {currentValue}
               </option>
            </select>
         </div>
      </div>
   );
};
