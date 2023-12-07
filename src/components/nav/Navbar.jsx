import styles from '@styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navItem}>
                <Link href="/">
                    <p>Home</p>
                </Link>
            </div>
            <div className={styles.navItem}>
                <Link href="/generate-report">
                    <p>Generate Report</p>
                </Link>
            </div>
        </nav>
    );

};

export default Navbar;