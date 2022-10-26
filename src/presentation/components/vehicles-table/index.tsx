import React from 'react';
import { useHistory } from 'react-router-dom';

import { VehicleRow } from '../vehicle-row';
import { VehicleTablePagination } from '../vehicle-table-pagination';
import { VehiclesContext } from '../../../main/factories/context/context';

import styles from './vehicles-table.module.css';

export const VehiclesTable: React.FC = () => {
   const { setSelectedVehicleUuid } = React.useContext(VehiclesContext);
   const { vehicles } = React.useContext(VehiclesContext);

   const history = useHistory();

   const handleVehicleClick = (uuid) => {
      history.push(`/edit-vehicle/`);
      setSelectedVehicleUuid(uuid);
   };

   return (
      <>
         <table className={styles.vehicles_table}>
            <thead data-testid="table-head">
               <tr>
                  <td>Dados do veículo</td>
                  <td>Ref</td>
                  <td>Placa</td>
                  <td>Data</td>
               </tr>
            </thead>
            <tbody>
               {vehicles.map((vehicle) => (
                  <VehicleRow
                     onClick={handleVehicleClick}
                     key={vehicle.vehicle_uuid}
                     name={vehicle.name}
                     modelName={vehicle.model_name}
                     modelYear={vehicle.model_year}
                     fuel={vehicle.fuel_type}
                     mileage={vehicle.mileage}
                     price={vehicle.ad_selling_price}
                     manufacturingYear={vehicle.manufacturing_year}
                     picture={vehicle.image}
                     id={vehicle.vehicle_uuid}
                     brand_name={vehicle.vehicle_uuid}
                  />
               ))}
            </tbody>
         </table>
         <VehicleTablePagination />
      </>
   );
};
