import React from "react";
import styles from './BodyBottomPart.module.css';
import QuoteButtonYellow from "../QuoteButtonYellow";
import MacBookTop from '/public/macbookTop.svg';
import MacBookBottom from '/public/macbookBottom.svg';

const BodyBottomPart: React.FC = () => {
    return (
        <div className={styles.BodyBottomPartContainer}>
            <div className={styles.BodyBottomPartTextSection}>
                <div className={styles.BodyBottomPartTextContainer}>
                    <p className={styles.BodyBottomPartTitle}>Get the Sun to power your home</p>
                    <span className={styles.BodyBottomPartHeadLine}>All the power that you need for your house is now available</span>
                </div>
                <div className={styles.BodyBottomPartRequestQuoteSection}>
                    <QuoteButtonYellow />
                    <span className={styles.BodyBottomPartText}>Egestas fringilla aliquam leo</span>
                </div>
            </div>
            <div className={styles.BodyBottomPartMacBook}>
                <MacBookTop />
                <MacBookBottom />
            </div>
        </div>
    );

};

export default BodyBottomPart;