import React from 'react'

import filterIcon from '../../icons/searchbar/FilterIcon.svg'

import styles from './vehicle-navigation.module.css'

export const VehicleNavigation: React.FC = () => {
  return (
    <nav className={styles.vehicles_navigation}>
      <div className={styles.vehicles_search_bar}>
        <h1>Veículos</h1>
        <input data-testid="searchbar" placeholder="Buscar..." type="text" />
      </div>
      <div className={styles.vehicles_buttons}>
        <button className={styles.vehicles_filter_button}>
          <img src={filterIcon} /> Filtrar
        </button>
        <button className={styles.vehicles_add_button}>+ Adicionar</button>
      </div>
    </nav>
  )
}
