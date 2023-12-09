import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({ searchParams }) {
    return (
        <main className={styles.main}>
            <section className={styles.heroSection}>
                <section className={styles.heroTextContainer}>
                    <section className={styles.heroText}>
                        <h1 className={styles.title}>Social Listening: Datos de Sentimientos y Engagement en Tiempo Real</h1>
                        <p className={styles.description}>Descubre lo que dicen las redes sociales. Introduce hashtags y obtén valiosos datos sobre sentimientos, interacciones y participación en tiempo real.</p>
                    </section>
                    <Link href="/generate-report" className={styles.actionButton}>Crear Reporte</Link>
                </section>
                <section className={styles.heroImageContainer}>
                    <Image
                        src="/images/landing-page/dashboard-icon.png"
                        alt="Hero Image"
                        width={250}
                        height={200}
                        className={styles.heroImage}
                    />
                </section>
            </section>
            <section className={styles.featuresCardContainer}>
                <section className={styles.featuresCard}>
                    <i className={`fa-regular fa-heart`}></i>
                    <h2 className={styles.featuresCardTitle}>Sentimiento</h2>
                    <p className={styles.featuresCardDescription}>Descubre cómo se sienten los usuarios de las redes sociales sobre un tema en específico. Nuestro sistema analiza los sentimientos de los usuarios en tiempo real.</p>
                </section>
                <section className={styles.featuresCard}>
                    <i className={`fa-regular fa-thumbs-up`}></i>
                    <h2 className={styles.featuresCardTitle}>Interacción</h2>
                    <p className={styles.featuresCardDescription}>Descubre cuántas personas están hablando sobre un tema en específico. Nuestro sistema analiza la participación de los usuarios.</p>
                </section>
                <section className={styles.featuresCard}>
                    <i className={`fa-regular fa-clock`}></i>
                    <h2 className={styles.featuresCardTitle}>Tiempo Real</h2>
                    <p className={styles.featuresCardDescription}>Obtén datos al instante. Personaliza tu análisis seleccionando un periodo, ya sea del pasado o del presente</p>
                </section>
            </section>
        </main>
    )
}
