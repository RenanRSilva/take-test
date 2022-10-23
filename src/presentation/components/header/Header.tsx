import React from "react"
import dryveLogo from '../../icons/header/DryveLogo.svg'
import homeIcon from '../../icons/header/HomeIcon.svg'
import notificationIcon from '../../icons/header/NotificationIcon.svg'
import settingsIcon from '../../icons/header/SettingsIcon.svg'

import profilePic from '../../images/profile-pic.png'

import styles from './header.module.css'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_city}>
        <img src={dryveLogo} alt="" />
        <button data-testid="home-icon">
          <img src={homeIcon} alt="" />
        </button>
        <select name="" id="">
          <option value="">Dryve - Ribeirão Preto</option>
        </select>
      </div>
      <div className={styles.header_account}>
        <button>
          <img  data-testid="notification-icon" src={notificationIcon} alt="" />
        </button>
        <button>
          <img data-testid="settings-icon" src={settingsIcon} alt="" />
        </button>
        <button>
        <div className={styles.header_account_profile_pic}>
          <img src={profilePic} alt="" />
        </div>
        </button>
      </div>
    </header>
  )
}
