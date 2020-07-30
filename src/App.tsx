import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, settingsOutline, calendarOutline } from 'ionicons/icons';
import Agenda from './pages/Agenda';
import Tab2 from './pages/Tab2';
import Settings from './pages/Settings';
import axios, {AxiosInstance} from 'axios';
import 'reflect-metadata';

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

export const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://5f21742fdaa42f0016665b91.mockapi.io/api/v1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/agenda" component={Agenda} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/settings" component={Settings} />
            <Route path="/" render={() => <Redirect to="/agenda" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="agenda" href="/agenda">
              <IonIcon icon={calendarOutline} />
              <IonLabel>Agenda</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
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