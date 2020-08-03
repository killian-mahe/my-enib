import React, { useState } from 'react';
import { IonSlide , IonIcon} from '@ionic/react';
import { personAddSharp } from 'ionicons/icons';
import firebase from 'firebase/app';
import { PasswordInput, EmailInput } from '../../components/form/Inputs';

function Slide3() {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (email && password && password.length > 4) {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                if (error.code === "auth/email-already-in-use") {
                    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
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
        if (event.target.value.length < 4) setPasswordErrorMessage("Mot de passe trop court")
        else setPasswordErrorMessage(false);
    }

    return (
        <IonSlide className="flex flex-col p-4">
            <IonIcon icon={personAddSharp} className="text-6xl mb-4" />
            <h1 className="text-blue-600 text-3xl font-sans font-bold mb-6">Connecte-toi</h1>
            <form onSubmit={handleSubmit}>
                <EmailInput label="Adresse e-mail" className="mb-4" onChange={handleEmailChange}/>
                <PasswordInput label="Mot de passe" className="mb-6" onChange={handlePasswordChange} errorMessage={passwordErrorMessage}/>
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