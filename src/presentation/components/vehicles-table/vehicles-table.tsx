import React from 'react'
import { Vehicle } from '../vehicle/vehicle'
import { VehicleResultModel } from '../../../domain/models/vheicles-result-model'

import styles from './vehicles-table.module.css'

type Props = {
  vehicleList: VehicleResultModel[]
}

export const VehiclesTable: React.FC<Props> = ({ vehicleList }) => {
  return (
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
        {vehicleList.map((vehicle) => (
          <Vehicle
            key={vehicle.vehicle_uuid}
            name={vehicle.name}
            modelName={vehicle.model_name}
            modelYear={vehicle.model_year}
            fuel={vehicle.fuel_type}
            mileage={vehicle.mileage}
            price={vehicle.ad_selling_price}
            manufacturingYear={vehicle.manufacturing_year}
            picture={vehicle.image}
          />
        ))}
      </tbody>
    </table>
  )
}
