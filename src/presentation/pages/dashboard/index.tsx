import React from 'react';

import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar/';
import { Router } from '../../../main/routes/router';

import styles from './dashboard.module.css';

export const Dashboard: React.FC = () => {
   return (
      <>
         <Header />
         <section className={styles.dashboard}>
            <Sidebar />
            <div className={styles.vehicles_section}>
               <Router />
            </div>
         </section>
      </>
   );
};
