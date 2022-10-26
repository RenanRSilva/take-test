import React from 'react';

import { VehicleNavigation } from '../../components/vehicle-navigation';
import { VehiclesTable } from '../../components/vehicles-table';

import styles from './vehicles.module.css';

export const Vehicles: React.FC = () => {
   return (
      <div className={styles.vehicles_section}>
         <VehicleNavigation />
         <VehiclesTable />
      </div>
   );
};
