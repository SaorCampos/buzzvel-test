import React from "react";
import styles from "./QuoteButtonYellow.module.css";

const QuoteButtonYellow = ({ text = "Request a Quote",}) => {
    return (
        <button className={styles.quoteButtonYellow}>
            <span className={styles.requestYellow}>{text}</span>
            <span className={styles.arrowYellow}>→</span>
        </button>
    );
}

export default QuoteButtonYellow;