import React from 'react';

import { VehiclesContext } from '../../../main/factories/context/context';
import { Input } from '../UI/input';
import { Select } from '../UI/select';
import { useCapitalize } from '../../hooks/useCapitalizedCase';
import { EditClassification } from '../edit-classification/';
import { Tags } from '../tags';
import { EditPricing } from '../edit-pricing/';
import { AccessoriesSelect } from '../UI/acessories-select';
import { FeaturesSelect } from '../UI/features-select/indes';

import styles from './vehicle-form.module.css';

export const VehicleInformationForm: React.FC = () => {
   const { filteredVehicle } = React.useContext(VehiclesContext);

   return (
      <form className={styles.container} action="">
         <h2>Dados do veículo</h2>
         <div className={styles.vehicle_state}>
            <input type="radio" name="state" id="" />
            <label htmlFor="state">0 km</label>
            <input type="radio" name="state" id="" />
            <label htmlFor="">Seminovo</label>
         </div>
         <div className={styles.mid_row}>
            <div className={styles.plaque_row}>
               <Input label="Placa" currentValue="ABC-1234" />
            </div>
            <div className={styles.mid_row}>
               <Input label="Renavam" currentValue="93847473202" />
            </div>
         </div>
         <div className={styles.row}>
            <Select
               label="Marca"
               currentValue={useCapitalize(filteredVehicle[0].brand_name)}
            />
            <Select
               label="Modelo"
               currentValue={useCapitalize(filteredVehicle[0].model_name)}
            />
         </div>
         <div className={styles.row}>
            <div className={styles.mid_row}>
               <Select label="Carroceria" currentValue="Hatch/Sedan" />
            </div>
            <div className={styles.mid_row}>
               <div className={styles.mid_row}>
                  <Select
                     label="Ano Fabricação"
                     currentValue={filteredVehicle[0].manufacturing_year}
                  />
               </div>
               <div className={styles.small_row}>
                  <Select
                     label="Ano Modelo"
                     currentValue={filteredVehicle[0].model_year}
                  />
               </div>
            </div>
         </div>
         <div className={styles.row}>
            <Select
               label="Versão"
               currentValue={filteredVehicle[0].version_name}
            />
         </div>
         <div className={styles.row}>
            <Select
               label="Combustível"
               currentValue={filteredVehicle[0].fuel_type}
            />
            <Select
               label="Câmbio"
               currentValue={filteredVehicle[0].transmission_type}
            />
         </div>
         <div className={styles.row}>
            <div className={styles.row}>
               <Input
                  label="Quilometragem"
                  currentValue={filteredVehicle[0].mileage / 1000 + ' km'}
               />
            </div>
            <div className={styles.row}>
               <Select label="Cor" currentValue="Branco" />
            </div>
         </div>
         <h2>Acessórios</h2>
         <div className="row">
            <AccessoriesSelect label="Acessórios"></AccessoriesSelect>
         </div>
         <h2>Características</h2>
         <div className="row">
            <FeaturesSelect label="Características"></FeaturesSelect>
         </div>
         <h2>Localização</h2>
         <div className={styles.row}>
            <Select label="Estado" currentValue="São Paulo" />
            <Select label="Cidade" currentValue="Ribeirão Preto" />
         </div>
         <EditClassification />
         <Tags />
         <div>
            <nav className={styles.form_navigation}>
               <ul>
                  <li className={styles.selected}>Avaliação de venda</li>
                  <li>Avaliação de revenda</li>
                  <li>Preço desejado</li>
               </ul>
            </nav>
         </div>
         <EditPricing vehiclePrice={filteredVehicle[0].ad_selling_price} />
      </form>
   );
};
