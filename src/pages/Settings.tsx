import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Category from '../components/settings/Category';
import { TwitterPicker } from 'react-color';

function Settings() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Paramètres</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Category name="Apparence">
          <div className="divide-y divide-gray-400">
            <TwitterPicker/>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </Category>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
