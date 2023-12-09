import styles from '@styles/Report.module.css';
//import { useAppContext } from '../app/providers';
import LoadingClock from '@components/LoadingClock';
import Data from '@components/input/Data';
//import { useRouter, useSearchParams } from "next/navigation";

export default function Report({ searchParams }) {
    if (searchParams.status === 'IDLE') {
        return (
            <section className={styles.idleSection}>
                <p>Sin reporte que generar.</p>
            </section>
        );
    }
    if (searchParams.status === 'LOADING') {
        return (
            <section className={styles.loadingContainer}>
                <p>Generando reporte...</p>
                <LoadingClock />
            </section>
        );
    }
    if (searchParams.status === 'ERROR') {
        return (
            <p>Error al generar el reporte.</p>
        );
    }
    if (searchParams.status === "SUCCESS" && searchParams.hashtags !== "" && searchParams.hashtags !== 'undefined' && searchParams.executionArn !== "" && searchParams.executionArn !== "undefined") {
        return (
            <section className={styles.reportContainer}>
                <Data executionArn={searchParams.executionArn} searchParams={searchParams} />
            </section>
        );
    }
}