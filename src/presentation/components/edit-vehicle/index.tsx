import React from 'react';

import { Container } from '../UI/container/container';
import { SectionTitle } from '../UI/section-title';
import { VehicleInformationForm } from '../edit-vehicle-form/';

import styles from './edit-vehicle.module.css';
import { SaveVehicle } from '../UI/save-vehicle';

export const EditVehicleInfo: React.FC = () => {
   return (
      <>
         <SectionTitle sectionTitle="Informações" />
         <Container>
            <div>
               <div>
                  <nav
                     data-testid="form-navigation"
                     className={styles.form_navigation}
                  >
                     <ul>
                        <li className={styles.selected}>Dados do veículo</li>
                        <li>Preço médio</li>
                     </ul>
                  </nav>
               </div>
               <VehicleInformationForm />
            </div>
         </Container>
         <SaveVehicle />
      </>
   );
};
