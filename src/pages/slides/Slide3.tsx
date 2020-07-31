import React, { useState, useRef, RefObject } from 'react';
import { IonSlide , IonIcon} from '@ionic/react';
import { personAddSharp } from 'ionicons/icons';
import firebase from 'firebase/app';

function Slide3() {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>();

    const passwordInput = useRef() as RefObject<HTMLInputElement>;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (email && password && password !== "") {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                if (error.code === "auth/email-already-in-use") {
                    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                        passwordInput.current?.classList.add("border-red-500");
                        setPasswordErrorMessage("Mot de passe incorrect");
                    }); 
                }
            }); 
        }
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        if (event.target.value.length > 0) passwordInput.current?.classList.remove("border-red-500");
    }

    return (
        <IonSlide className="flex flex-col p-4">
            <IonIcon icon={personAddSharp} className="text-6xl mb-4" />
            <h1 className="text-blue-600 text-3xl font-sans font-bold mb-6">Connecte-toi</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Adresse e-mail
                    </label>
                    <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="E-mail" onChange={handleEmailChange}/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Mot de passe
                    </label>
                    <input ref={passwordInput} className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Mot de passe" onChange={handlePasswordChange}/>
                    <p className="text-red-500 text-xs italic">{passwordErrorMessage}</p>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">
                        Connexion
                    </button>
                </div>
            </form>
        </IonSlide>
    );
}

export default Slide3;