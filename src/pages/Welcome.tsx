import React, { useRef, useEffect } from 'react';
import {
    IonApp,
    IonSlides,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';
import { arrowForwardCircle } from 'ionicons/icons';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

function Welcome() {
    const slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    const slidesRef = useRef() as React.MutableRefObject<HTMLIonSlidesElement>;
    const buttonRef = useRef() as React.MutableRefObject<HTMLIonFabButtonElement>;

    useEffect(() => {
        slidesRef.current.addEventListener('ionSlideNextStart', () => {
            slidesRef.current.getActiveIndex().then((index) => {
                if (index == 2) {
                    buttonRef.current.classList.add('opacity-0');
                }
            });
        });
        slidesRef.current.addEventListener('ionSlidePrevStart', () => {
            buttonRef.current.classList.remove('opacity-0');
        });
    }, []);

    return (
        <IonApp>
            <IonContent>
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton onClick={() => slidesRef.current.slideNext()} ref={buttonRef} className="mb-16 transition duration-500" style={{'--background': '#3182ce'}}>
                        <IonIcon icon={arrowForwardCircle}/>
                    </IonFabButton>
                </IonFab>
                <IonSlides pager={true} options={slideOpts} className="h-full" ref={slidesRef}>
                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                </IonSlides>
            </IonContent>
        </IonApp>
    );
}

export default Welcome;