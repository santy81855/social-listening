import styles from '@styles/Report.module.css';
//import { useAppContext } from '../app/providers';
import LoadingClock from '@components/LoadingClock';
import Data from '@components/input/Data';
//import { useRouter, useSearchParams } from "next/navigation";

export default function Report({ searchParams }) {
    if (searchParams.status === 'IDLE') {
        return (
            <p>No report to generate.</p>
        );
    }
    if (searchParams.status === 'LOADING') {
        return (
            <LoadingClock />
        );
    }
    if (searchParams.status === 'ERROR') {
        return (
            <p>Error generating the report.</p>
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