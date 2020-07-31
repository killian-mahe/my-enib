import React from 'react';
import {
    IonApp,
    IonSlides,
    IonContent
} from '@ionic/react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

function Welcome() {
    const slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    return (
        <IonApp>
            <IonContent>
                <IonSlides pager={true} options={slideOpts} className="h-full">
                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                </IonSlides>
            </IonContent>
        </IonApp>
    );
}

export default Welcome;