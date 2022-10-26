import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Vehicles } from '../../presentation/pages/vehicles/';
import { EditVehicle } from '../../presentation/pages/edit-vehicle/';
import { VehiclesProvider } from '../factories/context/context';

export const Router: React.FC = () => {
   return (
      <VehiclesProvider>
         <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Vehicles} />
               <Route path="/edit-vehicle" exact component={EditVehicle} />
            </Switch>
         </BrowserRouter>
      </VehiclesProvider>
   );
};
