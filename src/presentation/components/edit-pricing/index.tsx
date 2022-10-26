import React from 'react';

import { PricingInput } from '../UI/pricing-input';

import styles from './edit-pricing.module.css';

type Props = {
   vehiclePrice: number;
};

export const EditPricing: React.FC<Props> = ({ vehiclePrice }) => {
   return (
      <div className={styles.pricing_container}>
         <div className={styles.pricing}>
            <PricingInput
               label="Preço máximo"
               currentValue={vehiclePrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
               })}
            />
            <div className={styles.kbb_pricing}>
               <p>Faixa de preço KBB &trade;</p>
               <p>
                  <strong data-testid="price-range-kbb">
                     R$ 65.298 - R$ 69.298
                  </strong>
               </p>
            </div>
         </div>
         <div className={styles.pricing}>
            <PricingInput
               label="Preço mínimo"
               currentValue={vehiclePrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
               })}
            />
            <div className={styles.particular_price}>
               <p>Preço para Particular</p>
               <p>
                  <strong data-testid="price-for-private">
                     R$ 65.298 - R$ 69.298
                  </strong>
               </p>
            </div>
         </div>
      </div>
   );
};
