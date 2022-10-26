import React from 'react';

import { Container } from '../UI/container/container';
import { SectionTitle } from '../UI/section-title';
import { VehicleInformationForm } from '../edit-vehicle-form/';

import styles from './edit-vehicle.module.css';

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
         <div className={styles.save_button_area}>
            <button data-testid="save-button">Salvar</button>
         </div>
      </>
   );
};
