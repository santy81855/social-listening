import styles from '../styles/Data.module.css';
import generateReportData from '../lib/GenerateReportData';
import axios from 'axios';


export default async function Data({ executionArn }) {
    const res = await axios.get(`http://localhost:3000/api/check-results?executionArn=${executionArn}`);
    const reportData = await res.data;
    return (
        <section className={styles.main}>
            <p>{JSON.stringify(generateReportData(reportData))}</p>
        </section>
    );
};

