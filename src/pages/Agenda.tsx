import React from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import './Agenda.css';

const Agenda: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense" mode="ios">
          <IonToolbar>
            <IonTitle><IonIcon icon={calendarOutline} /> Agenda</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Agenda;
