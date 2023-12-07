import styles from '@styles/Report.module.css';
//import { useAppContext } from '../app/providers';
import LoadingClock from '@components/LoadingClock';
import Data from '@components/input/Data';
//import { useRouter, useSearchParams } from "next/navigation";

export default function Report({ searchParams }) {
    return (
        <section className={styles.sectionContainer}>
            <p>ARN = {searchParams.executionArn}</p>
            {searchParams.status === 'LOADING' && <LoadingClock />}
            {searchParams.status === 'ERROR' && <p>Error generating the report.</p>}
            {(searchParams.status === "SUCCESS" && searchParams.executionArn !== "" && searchParams.executionArn !== "undefined") && <Data executionArn={searchParams.executionArn} />}
        </section>
    );
}