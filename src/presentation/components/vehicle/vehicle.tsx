import React from "react";

import styles from './vehicle.module.css'

type Props = {
  name: string
  modelName: string
  modelYear: number
  manufacturingYear: number
  fuel: string
  mileage: number
  price: number
  picture: string
}

export const Vehicle: React.FC<Props> = ({ name, modelYear, manufacturingYear, fuel, mileage, price, modelName, picture }) => {
  return(
    <tr className={styles.vehicle_row}>
      <td className={styles.vehicle_info}>
        <img width={120} src={`${picture}`} alt="" />
        <div>
          <h2>{modelName}</h2>
          <p>{name}</p>
          <p>{manufacturingYear}/{modelYear} - {fuel}</p>
          <p >{mileage} - <span className={styles.vehicle_price}> {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></p>
        </div>
      </td>
      <td>
       L4GVJEI {/*  Not coming from API  */}
      </td>
      <td>
        FTF5I78 {/*  Not coming from API  */}
      </td>
      <td>
        25/10/12{/*  Not coming from API  */}
      </td>
    </tr>
  )
}
