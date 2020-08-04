import React, { useState, useEffect, useRef } from 'react';
import { IonRefresher, IonRefresherContent } from '@ionic/react';
import CalendarEvent from '../../models/CalendarEvent';
import { apiClient } from '../../App';
import DailyEvent from './DailyEvent';
import { plainToClass } from 'class-transformer';
import EventDetail from '../../pages/EventDetail';

function DailyCalendar() {

    const [events, setEvents] = useState<CalendarEvent[]>();
    const [detailEvent, setDetailEvent] = useState<CalendarEvent>();
    const detailRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const fetchData = async () => {
        const response = await apiClient.get<CalendarEvent[]>('/events')
        
        setEvents(plainToClass(CalendarEvent, response.data).sort((a, b) => {
            return a.start.getTime() - b.start.getTime();
        }));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const loadEvent = async (eventId : number) => {
        const event = events?.find((event) => {
            if (event.id === eventId) return true;
        })
        setDetailEvent(event);
        detailRef.current?.classList.remove('translate-y-full');
    }

    const handleDetailClose = () => {
        detailRef.current?.classList.add('translate-y-full');
        setTimeout(() => {
            setDetailEvent(undefined)
        }, 500);
    }

    return (
        <div className="container p-5 min-h-full bg-gray-100">
            <IonRefresher className="z-10" slot="fixed" onIonRefresh={(event) => fetchData().then(() => event.detail.complete())}>
                <IonRefresherContent refreshingSpinner="circles"></IonRefresherContent>
            </IonRefresher>
            {(!events) ? <div className="flex h-full items-center justify-center text-lg font-sans font-light text-blue-900">Chargement de l'agenda...</div> : <div></div>}
            {
                events?.map((event) => {
                    return <div className="mb-3" onClick={() => loadEvent(event.id)} key={event.id}><DailyEvent event={event}/></div>
                })
            }
            <div ref={detailRef} className="fixed bottom-0 inset-x-0 h-3/4 top-1/4 transition-transform transform translate-y-full duration-500 ease-in-out rounded-t-xl bg-white">
                {detailEvent ? <EventDetail event={detailEvent} onClose={handleDetailClose}/> : <div/> }
            </div>
        </div>
    );
};

export default DailyCalendar;