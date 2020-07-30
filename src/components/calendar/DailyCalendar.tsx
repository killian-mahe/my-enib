import React, { useState, useEffect } from 'react';
import './DailyCalendar.css';
import CalendarEvent from '../../models/CalendarEvent';
import { apiClient } from '../../App';
import DailyEvent from './DailyEvent';
import { plainToClass } from 'class-transformer';

function DailyCalendar() {

    const [events, setEvents] = useState<CalendarEvent[]>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await apiClient.get<CalendarEvent[]>('/events')
            setEvents(plainToClass(CalendarEvent, response.data).sort((a, b) => {
                return a.start.getTime() - b.start.getTime();
            }));
        }

        fetchData();
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