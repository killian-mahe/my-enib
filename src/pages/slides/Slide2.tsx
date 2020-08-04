import React from 'react';
import { IonSlide } from '@ionic/react';

function Slide2() {

    return (
        <IonSlide className="flex flex-col p-4 items-center pb-20">
            <div className="w-2/3 mb-10 animate-bounce-slow">
                <img src={process.env.PUBLIC_URL + "/assets/slides/undraw_events_2p66.svg"}/>
            </div>
            <h1 className="text-blue-600 text-3xl font-sans font-bold mb-6">Ton emploi du temps</h1>
            <p className="text-lg font-sans font-light mt-4">Une interface simple pour consulter ton emploi du temps, même hors-connection !</p>
        </IonSlide>
    );
}

export default Slide2;