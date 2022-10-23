import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div>
                <div className={styles.links}>
                    <span>Fakesite</span>
                    <Link href="#">About Us</Link>
                    <Link href="#">Press</Link>
                    <Link href="#">Policies</Link>
                    <Link href="#">Help</Link>
                </div>
                <div className={styles.links}>
                    <span>Account</span>
                    <Link href="#">Edit Profile</Link>
                    <Link href="#">Friends</Link>
                    <Link href="#">Social</Link>
                    <Link href="#">Delete Profile</Link>
                </div>
            </div>
            <div className={styles.bottom}>
                <img src="/assets/logo.png" loading="lazy" alt="FakeSite Logo" />
                <div>
                    <Link href="#">Terms</Link>
                    <Link href="#">Privacy</Link>
                    <Link href="#">Sitemap</Link>
                </div>
            </div>
      </footer>
    )
}