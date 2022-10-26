import React, { useState } from 'react';

import helpIcon from '../../icons/edit-vehicle/help.svg';

import styles from './edit-classification.module.css';

export const EditClassification: React.FC = () => {
   const [selectedClassification, setSelectedClassification] = useState('A');
   const [vehicleCondition, setVehicleCondition] = useState('razoável');

   const handleClassification = (e) => {
      e.preventDefault();
      setSelectedClassification(e.target.value);
   };

   const handleVehicleCondition = (e) => {
      e.preventDefault();
      setVehicleCondition(e.target.value);
   };

   return (
      <div className={styles.classification}>
         <div>
            <h2>
               Classificação <img src={helpIcon} alt="Ajuda" />
            </h2>
            <div>
               <button
                  data-testid="classification-a"
                  onClick={handleClassification}
                  value="A"
                  className={`${styles.classification_button} ${
                     selectedClassification === 'A'
                        ? styles.selected_classification
                        : ''
                  }`}
               >
                  A
               </button>
               <button
                  data-testid="classification-b"
                  onClick={handleClassification}
                  value="B"
                  className={`${styles.classification_button} ${
                     selectedClassification === 'B'
                        ? styles.selected_classification
                        : ''
                  }`}
               >
                  B
               </button>
               <button
                  data-testid="classification-c"
                  onClick={handleClassification}
                  value="C"
                  className={`${styles.classification_button} ${
                     selectedClassification === 'C'
                        ? styles.selected_classification
                        : ''
                  }`}
               >
                  C
               </button>
               <button
                  data-testid="classification-d"
                  onClick={handleClassification}
                  value="D"
                  className={`${styles.classification_button} ${
                     selectedClassification === 'D'
                        ? styles.selected_classification
                        : ''
                  }`}
               >
                  D
               </button>
               <button
                  data-testid="classification-e"
                  onClick={handleClassification}
                  value="E"
                  className={`${styles.classification_button} ${
                     selectedClassification === 'E'
                        ? styles.selected_classification
                        : ''
                  }`}
               >
                  E
               </button>
            </div>
         </div>
         <div className={styles.condition}>
            <h2>
               Condição Geral do Veículo <img src={helpIcon} alt="Ajuda" />
            </h2>
            <div>
               <button
                  onClick={handleVehicleCondition}
                  data-testid="condition-razoavel"
                  value="razoável"
                  className={`${styles.classification_button} ${
                     vehicleCondition === 'razoável'
                        ? styles.selected_classification
                        : ''
                  }`}
               >
                  Razoável
               </button>
               <button
                  onClick={handleVehicleCondition}
                  data-testid="condition-bom"
                  value="bom"
                  className={`${styles.classification_button} ${
                     vehicleCondition === 'bom'
                        ? styles.selected_classification
                        : ''
                  }`}
               >
                  Bom
               </button>
               <button
                  onClick={handleVehicleCondition}
                  data-testid="condition-excelente"
                  value="excelente"
                  className={`${styles.classification_button} ${
                     vehicleCondition === 'excelente'
                        ? styles.selected_classification
                        : ''
                  }`}
               >
                  Excelente
               </button>
            </div>
         </div>
      </div>
   );
};
