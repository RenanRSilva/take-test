import React from 'react';

import styles from './vehicle.module.css';

import { SelectedVehicleModel } from '../../../domain/models/selected-vehicle-model';

export const VehicleRow: React.FC<SelectedVehicleModel> = ({
   name,
   modelYear,
   manufacturingYear,
   fuel,
   mileage,
   price,
   modelName,
   picture,
   onClick,
   id,
}) => {
   return (
      <tr onClick={() => onClick(id)} className={styles.vehicle_row}>
         <td className={styles.vehicle_info}>
            <img
               data-testid="vehicle-image"
               width={120}
               src={`${picture}`}
               alt=""
            />
            <div>
               <h2 data-testid="model-name">{modelName}</h2>
               <p data-testid="vehicle-name">{name}</p>
               <p data-testid="vehicle-year">
                  {manufacturingYear}/{modelYear} - {fuel}
               </p>
               <p data-testid="vehicle-mileage">
                  {mileage / 1000 + ' km'} -{' '}
                  <span
                     data-testid="vehicle-price"
                     className={styles.vehicle_price}
                  >
                     {' '}
                     {price.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                     })}
                  </span>
               </p>
            </div>
         </td>
         <td>L4GVJEI {/*  Not coming from API  */}</td>
         <td>FTF5I78 {/*  Not coming from API  */}</td>
         <td>25/10/12{/*  Not coming from API  */}</td>
      </tr>
   );
};
