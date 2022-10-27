import React from 'react';

import styles from './save-vehicle.module.css';

export const SaveVehicle: React.FC = () => {
   return (
      <div className={styles.save_button_area}>
         <button data-testid="save-button">Salvar</button>
      </div>
   );
};
