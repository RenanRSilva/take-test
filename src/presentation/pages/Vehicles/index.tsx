import React from "react";
import { Header } from "../../components/header/Header";
import { LoadVehicleList } from "../../../domain/usecases/load-vehicle-list";
import { Sidebar } from "../../components/sidebar/Sidebar";

type Props = {
  loadVehiclesList: LoadVehicleList
}

export const Vehicles: React.FC<Props> = ({loadVehiclesList}: Props) => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}
