import React, { useState, useRef } from 'react';
import CalendarEvent from '../../../models/CalendarEvent';
import { now } from '../../../App';
import DailyEvent, { EventState } from './components/DailyEvent';
// import { plainToClass } from 'class-transformer';
import EventDetail from '../../../pages/EventDetail';
import { Divider } from '../../Utilities';

interface DayliCalendarProps {
    onEventSelectedChanged?(selected: boolean): void;
    className?: string;
    events: CalendarEvent[];
}

function DailyCalendar(props: DayliCalendarProps) {
    
    let events = props.events?.filter((event) => {
        return event.start.toDateString() === now.toDateString();
    })
    const detailRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const opacityRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const [detailEvent, setDetailEvent] = useState<CalendarEvent>();
    const [passedEvents, setPassedEvents] = useState<CalendarEvent[]>(events?.filter((event: CalendarEvent) => {return event.stop.getTime() < now.getTime() ? true : false;}));
    const [currentEvents, setCurrentEvents] = useState<CalendarEvent[]>(events?.filter((event: CalendarEvent) => {return event.start.getTime() < now.getTime() && event.stop.getTime() > now.getTime() ? true : false;}));
    const [nextEvents, setNextEvents] = useState<CalendarEvent[]>(events?.filter((event: CalendarEvent) => {return event.start.getTime() > now.getTime() ? true : false;}));
    
    const reloadEvents = function() {
        setPassedEvents(events?.filter((event: CalendarEvent) => {return event.stop.getTime() < Date.now() ? true : false;}));
        setCurrentEvents(events?.filter((event: CalendarEvent) => {return event.start.getTime() < Date.now() && event.stop.getTime() > Date.now() ? true : false;}));
        setNextEvents(events?.filter((event: CalendarEvent) => {return event.start.getTime() > Date.now() ? true : false;}));
    }

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
        if (!detailEvent) return;
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
        <div className={`container min-h-full pb-5 bg-gray-100 background-pattern ${props.className}`} onClick={handleDetailClose}>
            <div ref={opacityRef} className="transition-opacity duration-500 ease-in-out h-full">
                {(!events) ? <div className="flex h-full items-center justify-center text-lg font-sans font-light text-blue-900">Chargement de l'agenda...</div> : <div></div>}
                <Divider className="sticky top-0 bg-gray-100 py-1" label="Actuellement"/>
                {
                    currentEvents?.map((event) => {
                        return <div className="my-3 mx-5 shadow-md" onClick={() => handleOnEventClick(event.id)} key={event.id}><DailyEvent event={event} state={EventState.now} onStateChanged={reloadEvents}/></div>
                    })
                }
                <Divider className="sticky top-0 bg-gray-100 py-1" label="Prochain cours"/>
                {
                    nextEvents?.map((event) => {
                        return <div className="my-3 mx-5 shadow-md" onClick={() => handleOnEventClick(event.id)} key={event.id}><DailyEvent event={event} state={EventState.next} onStateChanged={reloadEvents}/></div>
                    })
                }
                <Divider className="sticky top-0 bg-gray-100 py-1" label="Cours passés"/>
                {
                    passedEvents?.map((event) => {
                        return <div className="my-3 mx-5 shadow-md" onClick={() => handleOnEventClick(event.id)} key={event.id}><DailyEvent event={event} state={EventState.passed} onStateChanged={reloadEvents}/></div>
                    })
                }
            </div>
            <div ref={detailRef} className="fixed bottom-0 inset-x-0 h-3/4 top-1/4 transition-transform transform translate-y-full duration-500 ease-in-out rounded-t-xl bg-white shadow-2xl">
                {detailEvent ? <EventDetail event={detailEvent}/> : <div/> }
            </div>
        </div>
    );
};

export default React.memo(DailyCalendar);