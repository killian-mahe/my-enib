import React, { useState, useEffect } from 'react';
import './DailyCalendar.css';
import CalendarEvent from '../../models/CalendarEvent';
import { apiClient } from '../../App';
import DailyEvent from './DailyEvent';
import { plainToClass } from 'class-transformer';

interface CalendarProps {

};

const DailyCalendar : React.FC<CalendarProps> = () => {

    const [events, setEvents] = useState<CalendarEvent[]>();

    useEffect(() => {
        apiClient.get<CalendarEvent[]>('/events').then((response) => {
            let eventsClass = plainToClass(CalendarEvent, response.data).sort((a, b) => {
                return a.start.getTime() - b.start.getTime();
            });
            setEvents(eventsClass);
        })
    }, []);


    return (
        <div className="container p-5 bg-gray-100">
            {
                events?.map((event) => {
                    return <DailyEvent event={event} key={event.id}/>
                })
            }
        </div>
    );
};

export default DailyCalendar;