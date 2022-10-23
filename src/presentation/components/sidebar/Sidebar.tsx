import React, { useRef, useState } from 'react'

import AnalyticsIcon from '../../icons/sidebar/AnalyticsIcon.svg'
import CalendarIcon from '../../icons/sidebar/CalendarIcon.svg'
import BankIcon from '../../icons/sidebar/BankIcon.svg'
import ContactIcon from '../../icons/sidebar/ContactIcon.svg'
import RocketIcon from '../../icons/sidebar/RocketIcon.svg'
import VehiclesIcon from '../../icons/sidebar/VehiclesIcon.svg'
import TagIcon from '../../icons/sidebar/TagIcon.svg'
import DashboardIcon from '../../icons/sidebar/DashboardIcon.svg'
import OpenArrowIcon from '../../icons/sidebar/OpenArrowIcon.svg'
import CloseArrowIcon from '../../icons/sidebar/CloseArrowIcon.svg'

import styles from './sidebar.module.css'

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const parent = useRef(null)

  const handleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <nav>
        <ul>
          <li>
            <img src={DashboardIcon} alt="Resumo" />
            {isOpen && <p data-testid="menu-text">Resumo</p>}
          </li>
          <li>
            <img src={TagIcon} alt="Oportunidade" />
            {isOpen && <p data-testid="menu-text">Oportunidade</p>}
          </li>
          <li>
            <img src={CalendarIcon} alt="Agenda" />
            {isOpen && <p data-testid="menu-text">Agenda</p>}
          </li>
          <li className={styles.selected}>
            <img src={VehiclesIcon} alt="Veículos" />
            {isOpen && <p data-testid="menu-text">Veículos</p>}
          </li>
          <li>
            <img src={RocketIcon} alt="Publicação" />
            {isOpen && <p data-testid="menu-text">Publicação</p>}
          </li>
          <li>
            <img src={ContactIcon} alt="Contatos" />
            {isOpen && <p data-testid="menu-text">Contatos</p>}
          </li>
          <li>
            <img src={AnalyticsIcon} alt="Analytics" />
            {isOpen && <p data-testid="menu-text">Analytics</p>}
          </li>
          <li>
            <img src={BankIcon} alt="Financiamento" />
            {isOpen && <p data-testid="menu-text">Financiamento</p>}
          </li>
        </ul>
      </nav>
      <button
        data-testid="handle-sidebar-button"
        className={styles.sidebar_button}
        onClick={handleSideBar}
      >
        {isOpen ? (
          <img data-testid="close-icon" src={CloseArrowIcon} alt="" />
        ) : (
          <img data-testid="open-icon" src={OpenArrowIcon} alt="" />
        )}
      </button>
    </aside>
  )
}
