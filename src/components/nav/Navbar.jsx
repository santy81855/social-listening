import styles from '@styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <section className={styles.textContainer}>
                <div className={styles.navItem}>
                    <Link href="/">
                        <p className={styles.companyName}>ASResearch</p>
                    </Link>
                </div>
                <div className={styles.navItem}>
                    <Link href="/">
                        <p className={styles.navLink}>Inicio</p>
                    </Link>
                    <Link href="/generate-report">
                        <p className={styles.reportButton}>Crear Reporte</p>
                    </Link>
                </div>
            </section>
        </nav>
    );

};

export default Navbar;