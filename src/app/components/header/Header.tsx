import React from 'react';
import { useHeaderData } from '@/ports/UseHeaderData';
import styles from './Header.module.css';
import Headphone from '/public/headphone.svg';

const Header: React.FC = () => {
    const { phoneNumber, requestQuoteUrl } = useHeaderData();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.name}>
                    <span>soller</span>
                </div>
                <div className={styles.navContainer}>
                    <nav className={styles.nav}>
                        <a className={styles.products} href="/produtcs">
                            Products
                        </a>
                        <a className={styles.solutions} href="/solutions">
                            Solutions
                        </a>
                        <a className={styles.services} href="/services">
                            Services
                        </a>
                        <a className={styles.configure} href='/configure'>
                            Configure
                        </a>
                    </nav>
                </div>
            </div>
            <div className={styles.actions}>
                <a href={`tel:${phoneNumber}`} className={styles.phone}>
                    <Headphone className={styles.headphone} />
                    <div className={phoneNumber}>
                        {phoneNumber}
                    </div>
                </a>
                <a href={requestQuoteUrl} className={styles.quoteButtonPurple}>
                    <span className={styles.requestPurple}>Request a Quote</span>
                    <span className={styles.arrowPurple}>&#8594;</span>
                </a>
            </div>
        </header>
    );
};

export default Header;