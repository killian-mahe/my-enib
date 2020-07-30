import React, { useState, useEffect } from 'react';
import './DailyCalendar.css';
import { IonIcon } from '@ionic/react';
import { ellipse } from 'ionicons/icons';
import CalendarEvent from '../../models/CalendarEvent';
import VisualTimer from './VisualTimer';
import { apiClient } from '../../App';
import { plainToClass } from 'class-transformer';

interface CalendarProps {

};

function DailyEvent(props: any) {
    const [event, setEvent] = useState<CalendarEvent>(props.event);

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white w-full mb-3">
            <div className="px-3 py-2">
                <div className="font-bold text-md mb-2 items-center flex"><IonIcon icon={ellipse} color={event.course[0].color} className="mr-2"/> {event.course[0].name}</div>
                <div className="grid grid-rows-2 w-full">
                    <div className="justify-between flex w-full">
                        <div className="text-gray-700 text-base">{event.course[0].professor}</div>
                        <div className="text-gray-700 font-bold text-base">{event.start.toLocaleTimeString()}</div>
                    </div>
                    <div className="justify-between flex w-full">
                        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{event.course[0].classRoom}</div>
                        <VisualTimer start={event.start.getTime()} stop={event.stop.getTime()} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const DailyCalendar : React.FC<CalendarProps> = () => {

    const [events, setEvents] = useState<CalendarEvent[]>();

    useEffect(() => {
        if (!events) {
            apiClient.get<CalendarEvent[]>('/events').then((response) => {
                let eventsClass = plainToClass(CalendarEvent, response.data).sort((a, b) => {
                    return a.start.getTime() - b.start.getTime();
                });
                setEvents(eventsClass);
            })
        }
    }, [events]);


    return (
        <div className="container p-5 bg-gray-100">
            {
                events?.map((event) => {
                    return <DailyEvent event={event}/>
                })
            }
        </div>
    );
};

export default DailyCalendar;