'use client';
import styles from '../styles/Data.module.css';
import { useAppContext } from '../app/providers';
import { useRouter, useSearchParams } from "next/navigation";

const Data = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { appState, setAppState } = useAppContext();
    return (
        <section className={styles.main}>
            <p>{JSON.stringify(appState.reportData)}</p>
        </section>
    );
};

export default Data;