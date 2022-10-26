import React from 'react';

import { AddButton } from '../UI/add-button';

import xIcon from '../../icons/edit-vehicle/x-icon.svg';

import styles from './tags.module.css';

export const Tags = () => {
   return (
      <div className={styles.tags_container}>
         <h2>Tags</h2>
         <div className={styles.tags}>
            <AddButton />{' '}
            <div className={styles.tag}>
               <img src={xIcon} alt="Tag" /> Particular
            </div>{' '}
            <div className={styles.tag}>
               {' '}
               <img src={xIcon} alt="Tag" /> Super Oferta
            </div>
         </div>
      </div>
   );
};
