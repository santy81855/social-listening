'use client';
import styles from '../styles/Report.module.css';
import React, { useState } from 'react';
import { useAppContext } from '../app/providers';

const Report = () => {
    const { appState, setAppState } = useAppContext();
    return (
        <section className={styles.sectionContainer}>
            <p>{JSON.stringify(appState.output, null, 2)}</p>
        </section>
    );
}

export default Report;