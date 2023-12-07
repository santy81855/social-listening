import styles from '../styles/Report.module.css';
//import { useAppContext } from '../app/providers';
import { ClockLoader } from "react-spinners";
import Data from './Data';
//import { useRouter, useSearchParams } from "next/navigation";

export default function Report({ searchParams }) {
    return (
        <section className={styles.sectionContainer}>
            <p>ARN = {searchParams.executionArn}</p>
            {searchParams.status === 'LOADING' && <ClockLoader color={"#000000"} loading={true} size={150} />}
            {searchParams.status === 'ERROR' && <p>Error generating the report.</p>}
            {(searchParams.executionArn !== "" && searchParams.executionArn !== "undefined") && <Data executionArn={searchParams.executionArn} />}
        </section>
    );
}