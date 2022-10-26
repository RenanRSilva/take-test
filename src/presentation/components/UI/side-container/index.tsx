import React from 'react';

import styles from './side-container.module.css';

type Props = {
   children?: JSX.Element | JSX.Element[];
};

export const SideContainer: React.FC<Props> = (props) => {
   return <div className={styles.side_container}>{props.children}</div>;
};
