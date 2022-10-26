import React, { useEffect, useState } from 'react';

import { makeRemoteLoadVehicleList } from '../../../main/usecases/remote-load-vehicle-list';
import { VehicleResultModel } from '../../../domain/models/vheicles-result-model';

export type VehicleContextType = {
   vehicles: VehicleResultModel[];
   setSelectedVehicleUuid: (uuid: string) => void;
   filteredVehicle: {};
};

export const VehiclesContext = React.createContext<VehicleContextType>(null);

interface Props {
   children: React.ReactNode;
}

export const VehiclesProvider: React.FC<Props> = ({ children }) => {
   const [vehicles, setVehicles] = useState<VehicleResultModel[]>([]);
   const [selectedVehicleUuid, setSelectedVehicleUuid] = useState('');

   const filteredVehicle = vehicles.filter(
      (vehicle) => vehicle.vehicle_uuid === selectedVehicleUuid
   );

   useEffect(() => {
      makeRemoteLoadVehicleList()
         .load()
         .then((vehicles: VehicleResultModel[]) => setVehicles(vehicles));
   }, []);

   return (
      <VehiclesContext.Provider
         value={{ vehicles, setSelectedVehicleUuid, filteredVehicle }}
      >
         {children}
      </VehiclesContext.Provider>
   );
};
