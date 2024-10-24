import React from 'react';
import styles from './QuoteButtonPurple.module.css';

const QuoteButtonPurple = ({ text = "Request a Quote", }) => {
    return (
        <button className={styles.quoteButtonPurple}>
            <span className={styles.requestPurple}>{text}</span>
            <span className={styles.arrowPurple}>→</span>
        </button>
    );
};

export default QuoteButtonPurple;