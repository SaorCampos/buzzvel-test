import React from "react";
import sytles from './BodyUpperPart.module.css';
import TopBar from '/public/topbar.svg';
import Screen from '/public/screen.svg';

const BodyUpperPart: React.FC = () => {
    return (
        <div className={sytles.BodyUpperPartContainer}>
            <div className={sytles.BodyUpperPartTextContainer}>
                <span className={sytles.BodyUpperPartTextCaption}>
                    No more waste
                </span>
                <p className={sytles.BodyUpperPartTextSecondaryHeadLine}>
                    Pick the Sun
                </p>
                <p className={sytles.BodyUpperPartTextParagraph}>
                    Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                </p>
            </div>
            <div className={sytles.BodyUpperPartTextScreen}>
                <TopBar />
                <Screen />
            </div>
        </div>
    );
};

export default BodyUpperPart;