import React from "react";

import { Vehicles } from "../../../presentation/pages/Vehicles";
import { makeRemoteLoadVehicleList } from "../../usecases/remote-load-vehicle-list";

export const makeVehicles: React.FC = () => {
  return (
    <Vehicles
      loadVehiclesList={makeRemoteLoadVehicleList()}
    />
  )
}
