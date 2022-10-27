import React from 'react';

import { carImages } from '../../../presentation/images/car-images';
import { SectionTitle } from '../UI/section-title/';

import addIcon from '../../icons/edit-vehicle/plus-sign.svg';

import styles from './vehicle-gallery.module.css';

export const VehicleGallery: React.FC = () => {
   return (
      <>
         <SectionTitle sectionTitle="Fotos do veículo" />
         <div className={styles.gallery_container}>
            <aside className={styles.vehicle_gallery}>
               <div className={styles.add_photos}>
                  <img src={addIcon} alt="Adicionar Fotos" />
                  <p>Adicionar Fotos</p>
               </div>
               {carImages.map((image) => (
                  <img src={image} alt="" />
               ))}
            </aside>
         </div>
      </>
   );
};
