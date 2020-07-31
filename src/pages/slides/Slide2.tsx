import React from 'react';
import { IonSlide , IonIcon} from '@ionic/react';
import { calendarSharp } from 'ionicons/icons';

function Slide2() {

    return (
        <IonSlide className="flex flex-col p-4">
            <IonIcon icon={calendarSharp} className="text-6xl mb-4 animate-bounce-slow" />
            <h1 className="text-blue-600 text-3xl font-sans font-bold mb-6">Ton emploi du temps</h1>
            <p className="text-lg font-sans font-light mt-4">Une interface simple pour consulter ton emploi du temps, même hors-connection !</p>
        </IonSlide>
    );
}

export default Slide2;