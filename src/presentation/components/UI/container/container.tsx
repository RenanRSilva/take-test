import React from 'react';

import styles from './container.module.css';

type Props = {
   children?: JSX.Element | JSX.Element[];
};

export const Container: React.FC<Props> = (props) => {
   return <div className={styles.container}>{props.children}</div>;
};
