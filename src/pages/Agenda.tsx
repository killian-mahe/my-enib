import React, { useRef, useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner } from '@ionic/react';
import { IonSegment, IonSegmentButton } from '@ionic/react';
import DailyCalendar from '../components/calendar/dailyCalendar/DailyCalendar';
import WeeklyCalendar from '../components/calendar/weeklyCalendar/WeeklyCalendar';
import CalendarEvent from '../models/CalendarEvent';
// import { apiClient } from '../App';
import { _mockEvents } from '../components/Utilities';

function Agenda() {

  const [events, setEvents] = useState<CalendarEvent[]>();
  const contentRef = useRef() as React.MutableRefObject<HTMLIonContentElement>;
  const [selectedSegment, setSelectedSegment] = useState<string>("weekly");

  const fetchData = async () => {
      // const response = await apiClient.get<CalendarEvent[]>('/events')
      
      // setEvents(plainToClass(CalendarEvent, response.data).sort((a, b) => {
      //     return a.start.getTime() - b.start.getTime();
      // }));

      setEvents(_mockEvents().sort((a, b) => {
          return a.start.getTime() - b.start.getTime();
      }));
  }


  const handleOnChange = (event: any) => {
    setSelectedSegment(event.detail.value);
  }

  useEffect(() => {
      fetchData();
  }, []);

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
        </IonToolbar>
        {/* <IonRefresher className="z-10" slot="fixed" onIonRefresh={(event) => fetchData().then(() => event.detail.complete())}>
            <IonRefresherContent refreshingSpinner="circles"></IonRefresherContent>
        </IonRefresher> */}
          {
            events ? <><span className={selectedSegment === "daily" ? '' : 'hidden'}><DailyCalendar events={events}/></span> <span className={selectedSegment === "weekly" ? '' : 'hidden'}><WeeklyCalendar events={events}/></span></> : <div className="flex h-full items-center justify-center"><IonSpinner className="transform scale-150" name="crescent" /></div>
          }
      </IonContent>
    </IonPage>
  );
};

export default Agenda;
