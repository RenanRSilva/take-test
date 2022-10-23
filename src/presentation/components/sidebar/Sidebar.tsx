import React from "react"

import AnalyticsIcon from '../../icons/sidebar/AnalyticsIcon.svg'
import CalendarIcon from '../../icons/sidebar/CalendarIcon.svg'
import BankIcon from'../../icons/sidebar/BankIcon.svg'
import ContactIcon from'../../icons/sidebar/ContactIcon.svg'
import RocketIcon from'../../icons/sidebar/RocketIcon.svg'
import VehiclesIcon from'../../icons/sidebar/VehiclesIcon.svg'
import TagIcon from '../../icons/sidebar/TagIcon.svg'
import DashboardIcon from '../../icons/sidebar/DashboardIcon.svg'

import styles from './sidebar.module.css'

export const Sidebar: React.FC = () => {
  return (
    <section className={styles.sidebar}>
      <nav>
        <ul>
          <li>
           <img src={DashboardIcon} alt="" /> Resumo
          </li>
          <li>
           <img src={TagIcon} alt="" /> Oportunidade
          </li>
          <li>
           <img src={CalendarIcon} alt="" /> Agenda
          </li>
          <li className={styles.selected}>
           <img src={VehiclesIcon} alt="" /> Veículos
          </li>
          <li>
           <img src={RocketIcon} alt="" /> Publicação
          </li>
          <li>
           <img src={ContactIcon} alt="" /> Contatos
          </li>
          <li>
           <img src={AnalyticsIcon} alt="" /> Analytics
          </li>
          <li>
           <img src={BankIcon} alt="" /> Financiamento
          </li>
        </ul>
      </nav>
    </section>
  )
}
