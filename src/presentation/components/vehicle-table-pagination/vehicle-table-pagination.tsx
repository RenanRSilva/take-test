import React from 'react'

import styles from './vehicle-table-pagination.module.css'

export const VehicleTablePagination = () => {
  return (
    <div className={styles.vehicle_table_pagination}>
      <div>
        <button className={styles.selected}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>...</button>
        <button>30</button>
        <p className={styles.arrow}>{'>'}</p>
      </div>
      <div>
        <p className={styles.results}>Exibindo 8 de 547 registros</p>{' '}
        <select className={styles.inline} name="" id="">
          <option value="">8</option>
        </select>
      </div>
    </div>
  )
}
