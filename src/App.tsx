import 'reflect-metadata';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonSpinner,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { settingsOutline, calendarOutline } from 'ionicons/icons';
import axios, {AxiosInstance} from 'axios';
import { Plugins } from '@capacitor/core';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

/* Local Components */
import Agenda from './pages/Agenda';
import Settings from './pages/Settings';
import Welcome from './pages/Welcome';

/* Local Models */
import Preferences from './models/Preferences';

/* Firebase imports */
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const { Storage } = Plugins;

export const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://5f21742fdaa42f0016665b91.mockapi.io/api/v1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

export let now: Date = new Date(Date.now());

setInterval(() => {
  now = new Date(Date.now())
}, 60000);

function App() {
  
  const [user, setUser] = useState<firebase.User | null>();
  const [preferences, setPreferences] = useState<Preferences>();

  async function getPreferences() {
    const { value } = await Storage.get({key: 'preferences'});
    console.log(value);
    if (value == null) {
      setPreferences({primaryColor: "#5DADE2", secondaryColor: "#2471A3"} as Preferences)
    }
    else {
      setPreferences(JSON.parse(value!) as Preferences);
    }
  }

  useEffect(() => {

    getPreferences();
    let firebaseConfig = {
      apiKey: "AIzaSyD-X14crhzKPOjhelemwOViUCiDUwe07S0",
      authDomain: "my-enib.firebaseapp.com",
      databaseURL: "https://my-enib.firebaseio.com",
      projectId: "my-enib",
      storageBucket: "my-enib.appspot.com",
      messagingSenderId: "108129884581",
      appId: "1:108129884581:web:9ea683ac6247eeecd5b04c",
      measurementId: "G-N81W0VRB1S"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user);
      }
      else {
        setUser(null);
      }
    });
  }, []);

  if (user === undefined) return <IonApp><div className="flex h-full items-center justify-center"><IonSpinner className="transform scale-150" name="crescent" /></div></IonApp>;

  if (user === null) return <Welcome />

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/agenda" exact>
              <Agenda preferences={preferences!}/>
            </Route>
            <Route path="/settings" >
              <Settings preferences={preferences!} onPreferencesChanged={getPreferences}/>
            </Route>
            <Route path="/" render={() => <Redirect to="/agenda" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="agenda" href="/agenda">
              <IonIcon icon={calendarOutline} />
              <IonLabel>Agenda</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Paramètres</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;