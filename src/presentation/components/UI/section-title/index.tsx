import React from 'react';

import styles from './section.title.module.css';

type Props = {
   sectionTitle: string;
};

export const SectionTitle: React.FC<Props> = ({ sectionTitle }) => {
   return (
      <div className={styles.section_title_container}>
         <h2 data-testid="section-title">{sectionTitle}</h2>
      </div>
   );
};
