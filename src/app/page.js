import Image from 'next/image'
import styles from './page.module.css'
import InputSection from '../components/InputSection'
import Report from '../components/Report'

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <InputSection />
            </section>
            <section className={styles.section}>
                <Report />
            </section>
        </main>
    )
}
