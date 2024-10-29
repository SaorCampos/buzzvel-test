import React from "react";
import styles from './BodySecondUpperPart.module.css';
import Mobile from '/public/mobile1.svg';

const BodySecondUpperPart: React.FC = () => {
    return (
        <div className={styles.BodySecondUpperPartContainer}>
            <div className={styles.BodySecondUpperPartMobile}>
                <Mobile />
            </div>
            <div className={styles.BodySecondUpperPartTextContainer}>
                <div className={styles.BodySecondUpperPartTextSection}>
                    <span className={styles.BodySecondUpperPartCaption}>Services</span>
                    <span className={styles.BodySecondUpperPartHeadLine}>Personalized services</span>
                    <span className={styles.BodySecondUpperPartParagraph}>
                        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
                    </span>
                </div>
                <div className={styles.BodySecondUpperPartRow1}>
                    <div className={styles.BodySecondUpperPartBlock1}>
                        <span className={styles.BodySecondUpperPartBlock1Title}>
                            Et mauris
                        </span>
                        <span className={styles.BodySecondUpperPartBlock1Text}>
                            Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
                        </span>
                    </div>
                    <div className={styles.BodySecondUpperPartBlock1}>
                        <span className={styles.BodySecondUpperPartBlock1Title}>
                            Eget sit
                        </span>
                        <span className={styles.BodySecondUpperPartBlock1Text}>
                            Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. 
                        </span>
                    </div>
                </div>
                <div className={styles.BodySecondUpperPartRow1}>
                    <div className={styles.BodySecondUpperPartBlock1}>
                        <span className={styles.BodySecondUpperPartBlock1Title}>
                            Imperdiet pellentesque
                        </span>
                        <span className={styles.BodySecondUpperPartBlock1Text}>
                            Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
                        </span>
                    </div>
                    <div className={styles.BodySecondUpperPartBlock1}>
                        <span className={styles.BodySecondUpperPartBlock1Title}>
                            Non libero
                        </span>
                        <span className={styles.BodySecondUpperPartBlock1Text}>
                            Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodySecondUpperPart;