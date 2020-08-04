import React, { useRef } from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonSegment, IonSegmentButton } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import './Agenda.css';
import DailyCalendar from '../components/calendar/DailyCalendar';

function Agenda() {

  const contentRef = useRef() as React.MutableRefObject<HTMLIonContentElement>;

  const handleOnEventSelectedChanged = () => {
    contentRef.current?.classList.toggle('overflow-hidden-force');
  }

  return (
    
    <IonPage>
      <IonHeader className="z-0">
        <IonToolbar>
          <IonTitle><IonIcon icon={calendarOutline} /> Agenda</IonTitle>
        </IonToolbar>
      </IonHeader>
        
      <IonContent ref={contentRef}>
        <IonToolbar className="z-0">
          <IonSegment value="all">
            <IonSegmentButton value="all">Jour</IonSegmentButton>
            <IonSegmentButton value="favorites">Semaine</IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        <DailyCalendar onEventSelectedChanged={handleOnEventSelectedChanged}/>
      </IonContent>
    </IonPage>
  );
};

export default Agenda;
