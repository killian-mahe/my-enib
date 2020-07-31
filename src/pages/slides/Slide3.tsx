import React from 'react';
import { IonSlide , IonIcon} from '@ionic/react';
import { personAddSharp } from 'ionicons/icons';

function Slide3() {

    return (
        <IonSlide className="flex flex-col p-4">
            <IonIcon icon={personAddSharp} className="text-6xl mb-4" />
            <h1 className="text-blue-600 text-3xl font-sans font-bold mb-6">Connecte-toi</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Adresse e-mail
                </label>
                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-mail" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Mot de passe
                </label>
                <input className="shadow appearance-none border border-red-500 rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Mot de passe" />
                <p className="text-red-500 text-xs italic">Veuillez choisir un mot de passe</p>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Connexion
                </button>
            </div>
        </IonSlide>
    );
}

export default Slide3;