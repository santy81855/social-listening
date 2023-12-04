'use client';
import styles from '../styles/Report.module.css';
import React, { useState } from 'react';
import { useAppContext } from '../app/providers';

const Report = () => {
    const { appState, setAppState } = useAppContext();
    return (
        <section className={styles.sectionContainer}>
            {JSON.stringify(appState.output)}
        </section>
    );
}

export default Report;