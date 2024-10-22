import React from "react";
import { useFooterData } from "@/ports/UseFooterData";
import Logo from '/public/sollerLogo.svg';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const { year, company } = useFooterData();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerLogo}>
                <div className={styles.companyLogo}>
                    <Logo/>
                </div>
                <div className={styles.companyName}>
                    <p>Soller</p>
                </div>
            </div>
            <div className={styles.company}>
                <p>@ {year} {company.name}, Inc. {company.rights}</p>
            </div>
            <div className={styles.footerLinks}>
                <a href="/terms">Terms</a>
                <a href="/privacy">Privacy</a>
                <a href="/support">Support</a>
            </div>
        </footer>
    );
};

export default Footer;