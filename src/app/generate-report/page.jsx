import Image from 'next/image'
import styles from './page.module.css'
import InputSection from '../../components/InputSection'
import Report from '../../components/Report'

export default function Home({ searchParams }) {
    const userInput = {
        hashtags: searchParams.hashtags || "",
        // default start and end dates to the current date if not provided
        startDate: searchParams.startDate || `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`,
        endDate: searchParams.endDate || `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`,
        facebook: searchParams.facebook || true,
        twitter: searchParams.twitter || true,
        youtube: searchParams.youtube || true,
    }

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <InputSection
                    userInput={userInput}
                />
            </section>
            <section className={styles.section}>
                <Report searchParams={searchParams} />
            </section>
        </main>
    )
}
