import React from 'react';

import filterIcon from '../../icons/searchbar/FilterIcon.svg';
import addIcon from '../../icons/searchbar/white-add-icon.svg';

import styles from './vehicle-navigation.module.css';

export const VehicleNavigation: React.FC = () => {
   return (
      <nav className={styles.navigation}>
         <div className={styles.search_bar}>
            <h1>Veículos</h1>
            <input
               className={styles.search_bar_input}
               data-testid="search-bar"
               placeholder="Buscar..."
               type="text"
            />
         </div>
         <div className={styles.buttons}>
            <button
               data-testid="filter-button"
               className={styles.filter_button}
            >
               <img src={filterIcon} /> Filtrar
            </button>
            <button data-testid="add-button" className={styles.add_button}>
               <img src={addIcon} alt="" /> Adicionar
            </button>
         </div>
      </nav>
   );
};
