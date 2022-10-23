import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { LoadVehicleList } from "../../../domain/usecases/load-vehicle-list";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { VehicleSearchBar } from "../../components/vehicle-search-bar/VehicleSearchBar";

import styles from './vehicles.module.css'
import  {VehiclesTable} from '../../components/vehicles-table/vehicles-table'

type Props = {
  loadVehiclesList: LoadVehicleList
}

export const Vehicles: React.FC<Props> = ({loadVehiclesList}: Props) => {
  const [vehicles, setVehicles] = useState([])

    useEffect(() => {
      loadVehiclesList.load()
      .then(vehicles => setVehicles(vehicles))
    })

  return (
    <>
      <Header />
      <section className={styles.dashboard}>
        <Sidebar />
        <div className={styles.vehicles_section}>
           <VehicleSearchBar />
           <VehiclesTable vehicleList={vehicles} />
        </div>
      </section>
    </>
  )
}
