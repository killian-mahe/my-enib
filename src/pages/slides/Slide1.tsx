import React from 'react';
import { IonSlide, IonIcon } from '@ionic/react';
import { rocketSharp } from 'ionicons/icons';

function Slide1() {

    return (
        <IonSlide className="flex flex-col p-4">
            <IonIcon icon={rocketSharp} className="text-6xl mb-4 animate-bounce-slow"/>
            <h1 className="text-blue-600 text-4xl font-sans font-bold mb-6">Welcome</h1>
            <p className="text-lg font-sans font-light mt-4">Bienvenu sur l'application <span className="font-semibold">My ENIB</span> ! Fait par les étudiant, pour les étudiants !</p>
        </IonSlide>
    );
}

export default Slide1;