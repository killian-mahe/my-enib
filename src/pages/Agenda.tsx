import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonSegment, IonSegmentButton } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import './Agenda.css';
import DailyCalendar from '../components/calendar/DailyCalendar';
import WeeklyCalendar from '../components/calendar/WeeklyCalendar';

function Agenda() {

  const contentRef = useRef() as React.MutableRefObject<HTMLIonContentElement>;
  const [selectedSegment, setSelectedSegment] = useState<string>("weekly");

  const handleOnEventSelectedChanged = () => {
    contentRef.current?.classList.toggle('overflow-hidden-force');
  }

  const handleOnChange = (event: any) => {
    setSelectedSegment(event.detail.value);
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
          <IonSegment value={selectedSegment} onIonChange={handleOnChange}>
            <IonSegmentButton value="daily">Jour</IonSegmentButton>
            <IonSegmentButton value="weekly">Semaine</IonSegmentButton>
          </IonSegment>
        </IonToolbar>
          <DailyCalendar onEventSelectedChanged={handleOnEventSelectedChanged} className={selectedSegment === "daily" ? '' : 'hidden'}/>
          <WeeklyCalendar className={selectedSegment === "weekly" ? '' : 'hidden'}/>
      </IonContent>
    </IonPage>
  );
};

export default Agenda;
