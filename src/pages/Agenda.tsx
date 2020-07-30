import React from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonSegment, IonSegmentButton } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import './Agenda.css';
import DailyCalendar from '../components/calendar/DailyCalendar';

const Agenda: React.FC = () => {
  return (
    
    <IonPage>
      <IonHeader className="z-0">
        <IonToolbar>
          <IonTitle><IonIcon icon={calendarOutline} /> Agenda</IonTitle>
        </IonToolbar>
      </IonHeader>
        
      <IonContent>
        <IonToolbar className="z-0">
          <IonSegment value="all">
            <IonSegmentButton value="all">Jour</IonSegmentButton>
            <IonSegmentButton value="favorites">Semaine</IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        <DailyCalendar />
      </IonContent>
    </IonPage>
  );
};

export default Agenda;
