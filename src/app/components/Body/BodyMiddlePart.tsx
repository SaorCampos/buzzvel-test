import React from "react";
import sytles from './BodyMiddlePart.module.css';
import Mobile from '/public/mobile.svg';

const BodyMiddlePart: React.FC = () => {
    return (
        <div className={sytles.BodyMiddlePartContainer}>
            <div className={sytles.BodyMiddlePartTextContainer}>
                <div className={sytles.BodyMiddlePartTextSection}>
                    <span className={sytles.BodyMiddlePartCaption}>System features</span>
                    <span className={sytles.BodyMiddlePartHeadLine}>Powerful features</span>
                    <span className={sytles.BodyMiddlePartParagraph}>
                        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
                    </span>
                </div>
                <div className={sytles.BodyMiddlePartRow1}>
                    <div className={sytles.BodyMiddlePartBlock1}>
                        <span className={sytles.BodyMiddlePartBlock1Title}>
                            Erat sit
                        </span>
                        <span className={sytles.BodyMiddlePartBlock1Text}>
                            Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
                        </span>
                    </div>
                    <div className={sytles.BodyMiddlePartBlock1}>
                        <span className={sytles.BodyMiddlePartBlock1Title}>
                            Ullamcorper arcu
                        </span>
                        <span className={sytles.BodyMiddlePartBlock1Text}>
                            Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.
                        </span>
                    </div>
                </div>
                <div className={sytles.BodyMiddlePartRow1}>
                    <div className={sytles.BodyMiddlePartBlock1}>
                        <span className={sytles.BodyMiddlePartBlock1Title}>
                            Et pellentesque
                        </span>
                        <span className={sytles.BodyMiddlePartBlock1Text}>
                            Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.
                        </span>
                    </div>
                    <div className={sytles.BodyMiddlePartBlock1}>
                        <span className={sytles.BodyMiddlePartBlock1Title}>
                            Amet egestas
                        </span>
                        <span className={sytles.BodyMiddlePartBlock1Text}>
                            Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis.
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <Mobile className={sytles.BodyMiddlePartMobile} />
            </div>
        </div>
    );
};

export default BodyMiddlePart;