import styles from '@styles/Data.module.css';
import { getReportData } from '@actions/action';

export default async function Data({ executionArn }) {
    const reportData = await getReportData(executionArn);
    return (
        <section className={styles.main}>
            <p>{JSON.stringify(reportData)}</p>
        </section>
    );
};

