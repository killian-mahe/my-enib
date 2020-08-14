import React, { useRef, useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner, IonButtons, IonButton } from '@ionic/react';
import { IonSegment, IonSegmentButton } from '@ionic/react';
import DailyCalendar from '../components/calendar/dailyCalendar/DailyCalendar';
import WeeklyCalendar from '../components/calendar/weeklyCalendar/WeeklyCalendar';
import CalendarEvent from '../models/CalendarEvent';
// import { apiClient } from '../App';
import EventService from '../services/EventService'; 
import Preferences from '../models/Preferences';

interface AgendaProps {
  preferences: Preferences;
}

function Agenda(props: AgendaProps) {

  const [events, setEvents] = useState<CalendarEvent[]>();
  const contentRef = useRef() as React.MutableRefObject<HTMLIonContentElement>;
  const [selectedSegment, setSelectedSegment] = useState<string>("weekly");

  const handleOnChange = (event: any) => {
    setSelectedSegment(event.detail.value);
  }

  useEffect(() => {
    EventService.getEvents().then((calendarEvents) => {
      setEvents(calendarEvents);
    });
  }, []);

  async function SaveEvents() {
    EventService.saveEvents(events!);
  }

  return (
    
    <IonPage>
      <IonHeader className="z-0">
        <IonToolbar mode="ios">
          <IonTitle>Agenda</IonTitle>
        </IonToolbar>
      </IonHeader>
        
      <IonContent ref={contentRef}>
        <IonToolbar className="z-0" mode="ios">
          <IonSegment value={selectedSegment} onIonChange={handleOnChange}>
            <IonSegmentButton value="daily">Jour</IonSegmentButton>
            <IonSegmentButton value="weekly">Semaine</IonSegmentButton>
          </IonSegment>
          <IonButtons>
            <IonButton color="primary" onClick={SaveEvents}>Save</IonButton>
          </IonButtons>
        </IonToolbar>
        {/* <IonRefresher className="z-10" slot="fixed" onIonRefresh={(event) => fetchData().then(() => event.detail.complete())}>
            <IonRefresherContent refreshingSpinner="circles"></IonRefresherContent>
        </IonRefresher> */}
          {
            events ? <><span className={selectedSegment === "daily" ? '' : 'hidden'}><DailyCalendar events={events}/></span> <span className={selectedSegment === "weekly" ? '' : 'hidden'}><WeeklyCalendar events={events} preferences={props.preferences}/></span></> : <div className="flex h-full items-center justify-center"><IonSpinner className="transform scale-150" name="crescent" /></div>
          }
      </IonContent>
    </IonPage>
  );
};

export default Agenda;
