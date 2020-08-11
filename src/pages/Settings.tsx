import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Category from '../components/settings/Category';

function Settings() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Paramètres</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Category name="Apparence"><span>Hello</span></Category>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
