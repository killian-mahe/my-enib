import React, { useState, useEffect, useRef } from 'react';
import { IonRefresher, IonRefresherContent } from '@ionic/react';
import CalendarEvent from '../../models/CalendarEvent';
import { apiClient } from '../../App';
import DailyEvent from './DailyEvent';
import { plainToClass } from 'class-transformer';
import EventDetail from '../../pages/EventDetail';
import { Divider } from '../../components/Utilities';

interface DayliCalendarProps {
    onEventSelectedChanged?(selected: boolean): void;
    className?: string;
}

function DailyCalendar(props: DayliCalendarProps) {

    const [events, setEvents] = useState<CalendarEvent[]>();
    const [detailEvent, setDetailEvent] = useState<CalendarEvent>();
    const detailRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const opacityRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const fetchData = async () => {
        const response = await apiClient.get<CalendarEvent[]>('/events')
        
        setEvents(plainToClass(CalendarEvent, response.data).sort((a, b) => {
            return a.start.getTime() - b.start.getTime();
        }));
    }

    let passedEvents = events?.filter((event: CalendarEvent) => {return event.stop.getTime() < Date.now() ? true : false;})
    let currentEvents = events?.filter((event: CalendarEvent) => {return event.start.getTime() < Date.now() && event.stop.getTime() > Date.now() ? true : false;})
    let nextEvents = events?.filter((event: CalendarEvent) => {return event.start.getTime() > Date.now() ? true : false;})

    useEffect(() => {
        fetchData();
    }, []);

    const loadEvent = async (eventId : number) => {
        const event = events?.find((event) => {
            // eslint-disable-next-line
            if (event.id === eventId) return true;
        })
        setDetailEvent(event);
        if (props.onEventSelectedChanged) props.onEventSelectedChanged(true);
        detailRef.current?.classList.remove('translate-y-full');
        opacityRef.current?.classList.add('opacity-25');
    }

    const handleDetailClose = () => {
        detailRef.current?.classList.add('translate-y-full');
        opacityRef.current?.classList.remove('opacity-25');
        if (props.onEventSelectedChanged) props.onEventSelectedChanged(false);
        setTimeout(() => {
            setDetailEvent(undefined)
        }, 500);
    }

    const handleOnEventClick = (eventId: number) => {
        if (!detailEvent) loadEvent(eventId);
    }

    return (
        <div className={`container min-h-full bg-gray-100 background-pattern ${props.className}`}>
            <IonRefresher className="z-10" slot="fixed" onIonRefresh={(event) => fetchData().then(() => event.detail.complete())}>
                <IonRefresherContent refreshingSpinner="circles"></IonRefresherContent>
            </IonRefresher>
            <div ref={opacityRef} className="transition-opacity duration-500 ease-in-out">
                {(!events) ? <div className="flex h-full items-center justify-center text-lg font-sans font-light text-blue-900">Chargement de l'agenda...</div> : <div></div>}
                <Divider className="sticky top-0 bg-gray-100 py-1" label="Cours passés"/>
                {
                    passedEvents?.map((event) => {
                        return <div className="my-3 mx-5 shadow-md" onClick={() => handleOnEventClick(event.id)} key={event.id}><DailyEvent event={event}/></div>
                    })
                }
                <Divider className="sticky top-0 bg-gray-100 py-1" label="Actuellement"/>
                {
                    currentEvents?.map((event) => {
                        return <div className="my-3 mx-5 shadow-md" onClick={() => handleOnEventClick(event.id)} key={event.id}><DailyEvent event={event}/></div>
                    })
                }
                <Divider className="sticky top-0 bg-gray-100 py-1" label="Prochain cours"/>
                {
                    nextEvents?.map((event) => {
                        return <div className="my-3 mx-5 shadow-md" onClick={() => handleOnEventClick(event.id)} key={event.id}><DailyEvent event={event}/></div>
                    })
                }
            </div>
            <div ref={detailRef} className="fixed bottom-0 inset-x-0 h-3/4 top-1/4 transition-transform transform translate-y-full duration-500 ease-in-out rounded-t-xl bg-white shadow-2xl">
                {detailEvent ? <EventDetail event={detailEvent} onClose={handleDetailClose}/> : <div/> }
            </div>
        </div>
    );
};

export default DailyCalendar;