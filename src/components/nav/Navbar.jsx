import styles from '@styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navItem}>
                <Link href="/">
                    <p className={styles.companyName}>ASResearch</p>
                </Link>
            </div>
            <div className={styles.navItem}>
                <Link href="/">
                    <p className={styles.navLink}>Home</p>
                </Link>
                <Link href="/generate-report">
                    <p className={styles.reportButton}>Generate Report</p>
                </Link>
            </div>
        </nav>
    );

};

export default Navbar;