import React from 'react';
import { Link } from 'react-router-dom';

import { InspectionNotes } from '../../../presentation/components/inspection-notes/';
import { EditVehicleInfo } from '../../components/edit-vehicle/';
import { VehicleGallery } from '../../../presentation/components/edit-vehicle-gallery/';
import { LinkedContacts } from '../../../presentation/components/linked-contacts/';

import arrow from '../../icons/edit-vehicle/arrow.svg';

import styles from './edit-vehicle.module.css';

export const EditVehicle: React.FC = () => {
   return (
      <div className={styles.container}>
         <div className={styles.nav}>
            <div className={styles.title}>
               <h1>
                  <Link className={styles.link} to="/">
                     <img src={arrow} alt="" />
                  </Link>
                  Editar Veículo
               </h1>
            </div>
         </div>
         <div className={styles.information_section}>
            <EditVehicleInfo />
         </div>
         <div className={styles.inspection_notes_section}>
            <InspectionNotes />
         </div>
         <div className={styles.vehicle_gallery_section}>
            <VehicleGallery />
         </div>
         <div className={styles.linked_contacts}>
            <LinkedContacts />
         </div>
      </div>
   );
};
