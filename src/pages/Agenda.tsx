import React, { useRef, useState, useEffect } from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonSegment, IonSegmentButton } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import DailyCalendar from '../components/calendar/dailyCalendar/DailyCalendar';
import WeeklyCalendar from '../components/calendar/weeklyCalendar/WeeklyCalendar';
import CalendarEvent from '../models/CalendarEvent';
import { apiClient } from '../App';
import { _mockEvents } from '../components/Utilities';

function Agenda() {

  const [events, setEvents] = useState<CalendarEvent[]>();
  const contentRef = useRef() as React.MutableRefObject<HTMLIonContentElement>;
  const [selectedSegment, setSelectedSegment] = useState<string>("weekly");

  const fetchData = async () => {
    console.log("fetching data");
      const response = await apiClient.get<CalendarEvent[]>('/events')
      
      // setEvents(plainToClass(CalendarEvent, response.data).sort((a, b) => {
      //     return a.start.getTime() - b.start.getTime();
      // }));

      setEvents(_mockEvents().sort((a, b) => {
          return a.start.getTime() - b.start.getTime();
      }));
  }

  const handleOnEventSelectedChanged = () => {
    contentRef.current?.classList.toggle('overflow-hidden-force');
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
          <IonTitle><IonIcon icon={calendarOutline} /> Agenda</IonTitle>
        </IonToolbar>
      </IonHeader>
        
      <IonContent ref={contentRef}>
        <IonToolbar className="z-0" mode="ios">
          <IonSegment value={selectedSegment} onIonChange={handleOnChange}>
            <IonSegmentButton value="daily">Jour</IonSegmentButton>
            <IonSegmentButton value="weekly">Semaine</IonSegmentButton>
          </IonSegment>
        </IonToolbar>
          {
            events ? <><DailyCalendar onEventSelectedChanged={handleOnEventSelectedChanged} className={selectedSegment === "daily" ? '' : 'hidden'} events={events}/> <WeeklyCalendar className={selectedSegment === "weekly" ? '' : 'hidden'} events={events}/></>: <></>
          }
      </IonContent>
    </IonPage>
  );
};

export default Agenda;
