import React from 'react';

import { SectionTitle } from '../UI/section-title';
import { SideContainer } from '../UI/side-container';

import vehicleInspection from '../../images/vehicle-inspection.png';

import styles from './inspection-notes.module.css';

export const InspectionNotes: React.FC = () => {
   return (
      <div>
         <SectionTitle sectionTitle="Notas de inspeção" />
         <SideContainer>
            <img
               className={styles.inspection_img}
               src={vehicleInspection}
               alt="Inspeção do veículo"
            />
         </SideContainer>
      </div>
   );
};
