import React from 'react';
import styles from './Preloader.module.scss';

export const Preloader = () => {
    return (
        <div className={styles.spinner}>
            <div className={styles.head}></div>
        </div>
    );
};
