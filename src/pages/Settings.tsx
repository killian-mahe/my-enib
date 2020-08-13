import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Category from '../components/settings/Category';
import ColorBox from '../components/settings/ColorBox';
import SettingsRow from '../components/settings/SettingsRow';

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
          <ul className="divide-y divide-gray-400">
            <SettingsRow label="Couleur principale"><ColorBox color="#194D33"/></SettingsRow>
            <SettingsRow label="Couleur d'accentuation"><ColorBox color="#194D33"/></SettingsRow>
          </ul>
        </Category>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
