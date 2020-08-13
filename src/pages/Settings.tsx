import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import Category from '../components/settings/Category';
import ColorBox from '../components/settings/ColorBox';
import SettingsRow from '../components/settings/SettingsRow';
import Preferences from '../models/Preferences';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

interface SettingsProps {
  onPreferencesChanged?(): void;
  preferences: Preferences;
}

function Settings(props: SettingsProps) {

  const [preferences, setPreferences] = useState<Preferences>(props.preferences);

  async function handleOnSubmit() {
    await Storage.set({
      key: 'preferences',
      value: JSON.stringify(preferences)
    });
    props.onPreferencesChanged!();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Paramètres</IonTitle>
          <IonButtons slot="primary">
            <IonButton onClick={handleOnSubmit}>Valider</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Category name="Apparence">
          <ul className="divide-y divide-gray-400">
            <SettingsRow label="Couleur principale"><ColorBox color={preferences.primaryColor} onColorChanged={(color) => setPreferences({...preferences, primaryColor: color})}/></SettingsRow>
            <SettingsRow label="Couleur d'accentuation"><ColorBox color={preferences.secondaryColor} onColorChanged={(color) => setPreferences({...preferences, secondaryColor: color})}/></SettingsRow>
          </ul>
        </Category>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
