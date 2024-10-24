import React from 'react';
import { useHeaderData } from '@/ports/UseHeaderData';
import styles from './Header.module.css';
import Headphone from '/public/headphone.svg';
import QuoteButtonPurple from '../QuoteButtonPurple.js'
import Rwanda from '/public/rwanda.svg';

const Header: React.FC = () => {
    const { phoneNumber, requestQuoteUrl } = useHeaderData();

    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerActions}>
                <div className={styles.container}>
                    <div className={styles.name}>
                        <span>soller</span>
                    </div>
                    <div className={styles.navContainer}>
                        <nav className={styles.nav}>
                            <a className={styles.products} href="/">
                                Products
                            </a>
                            <a className={styles.solutions} href="/">
                                Solutions
                            </a>
                            <a className={styles.services} href="/">
                                Services
                            </a>
                            <a className={styles.configure} href='/'>
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
                    <QuoteButtonPurple />
                </div>
            </div>
            <div className={styles.headerQuote}>
                <div className={styles.quoteHeader}>
                    <div className={styles.headerTextSection}>
                        <div className={styles.headerTexTitle}>
                            <p className={styles.headerBoldText}>
                                Get the Sun to Power Your Home
                            </p>
                        </div>
                        <div className={styles.headerSubText}>
                            <p>
                                Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
                            </p>
                        </div>
                        <div className={styles.headerQuoteButton}>
                            <QuoteButtonPurple />
                        </div>
                        <div className={styles.headerCard}>
                            <p className={styles.headerCardQuote}>
                                “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
                            </p>
                            <div className={styles.clientCard}>
                                <Rwanda className={styles.client} />
                                <div className={styles.clientInfo}>
                                    <span className={styles.clientName}>Rwanda Melfor</span>
                                    <span className={styles.clientSite}>zerowaste.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainImageContainer}>
                        <div className={styles.headerImage}>
                            <img src="/technician.jpeg" alt="technician" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;