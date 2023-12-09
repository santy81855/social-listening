import Image from 'next/image'
import styles from './page.module.css'
import Report from '@components/Report'
import Form from '@components/input/Form'
import { redirect } from 'next/navigation'

export default function Home({ searchParams }) {
    const userInput = {
        hashtags: searchParams.hashtags || "",
        // default start and end dates to the current date if not provided
        startDate: searchParams.startDate || `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`,
        endDate: searchParams.endDate || `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`,
        facebook: searchParams.facebook || true,
        twitter: searchParams.twitter || true,
        youtube: searchParams.youtube || true,
        status: searchParams.status || "IDLE",
        selectedHashtag: searchParams.selectedHashtag || "",
        executionArn: searchParams.executionArn || "",
    }
    const checkRedirect = () => {
        if (!("hashtags" in searchParams) || !("startDate" in searchParams) || !("endDate" in searchParams) || !("facebook" in searchParams) || !("twitter" in searchParams) || !("youtube" in searchParams) || !("status" in searchParams) || !("selectedHashtag" in searchParams) || !("executionArn" in searchParams)) {
            redirect(`/generate-report?hashtags=${userInput.hashtags}&startDate=${userInput.startDate}&endDate=${userInput.endDate}&facebook=${userInput.facebook}&twitter=${userInput.twitter}&youtube=${userInput.youtube}&status=${userInput.status}&selectedHashtag=${userInput.selectedHashtag}&executionArn=${userInput.executionArn}`);
        }
    }
    checkRedirect();

    return (
        <main className={styles.main}>
            <section className={styles.reportPageContainer}>
                <section className={styles.reportTitleContainer}>
                    <i className={`fa-solid fa-cloud ${styles.cloudIcon}`}></i>
                    <h1 className={styles.reportTitle}>Generar Reporte Social</h1>
                </section>
                <section className={styles.section}>
                    <Form searchParams={searchParams} />
                </section>
                <section className={styles.section}>
                    <Report searchParams={searchParams} />
                </section>
            </section>
        </main>
    )
}