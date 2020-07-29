import React, { useState, useEffect } from 'react';
import './DailyCalendar.css';
import { IonIcon } from '@ionic/react';
import { ellipse, alarmOutline } from 'ionicons/icons';
import CalendarEvent from '../../models/CalendarEvent';
import VisualTimer from './VisualTimer';

interface CalendarProps {

};


function DailyEvent(props: any) {
    const [event, setEvent] = useState<CalendarEvent>(props.event);

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white w-full mb-3">
            <div className="px-3 py-2">
                <div className="font-bold text-md mb-2 items-center flex"><IonIcon icon={ellipse} color={event.course.color} className="mr-2"/> {event.course.name}</div>
                <div className="grid grid-rows-2 w-full">
                    <div className="justify-between flex w-full">
                        <div className="text-gray-700 text-base">{event.course.professor}</div>
                        <div className="text-gray-700 font-bold text-base">{event.start.toLocaleTimeString()}</div>
                    </div>
                    <div className="justify-between flex w-full">
                        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{event.course.classRoom}</div>
                        <VisualTimer start={event.start.getTime()} stop={event.stop.getTime()} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const DailyCalendar : React.FC<CalendarProps> = () => {

    let events = mockEvents().sort((a, b) => {
        return a.start.getTime() - b.start.getTime();
    });

    return (
        <div className="container p-5 bg-gray-100">
            {
                events.map((event) => {
                    return <DailyEvent event={event}/>
                })
            }
        </div>
    );
};

function mockEvents() {
    return [
        new CalendarEvent(new Date(2020, 6, 29, 17, 0), new Date(2020, 6, 29, 18, 30), 'Etudes des mécanismes', 'Erwan Contal', '2E-206', 'danger'),
        new CalendarEvent(new Date(2020, 6, 29, 14, 0), new Date(2020, 6, 29, 15, 30), 'Microprocesseurs', 'Eric Boucharé', '2E-204', 'warning'),
        new CalendarEvent(new Date(2020, 6, 29, 15, 0), new Date(2020, 6, 29, 16, 30), 'Electronique de puissance', 'Erwan Contal', 'A105', 'success'),
        new CalendarEvent(new Date(2020, 6, 29, 10, 0), new Date(2020, 6, 29, 12, 30), 'Conduite de projet', 'Cédric Buche', '2E-204', 'dark'),
        new CalendarEvent(new Date(2020, 6, 29, 10, 0), new Date(2020, 6, 29, 11, 30), 'Etudes des mécanismes', 'Erwan Contal', 'E204', 'danger'),
        new CalendarEvent(new Date(2020, 6, 29, 16, 0), new Date(2020, 6, 29, 17, 30), 'Etudes des mécanismes', 'Erwan Contal', '2E-013', 'danger'),
        new CalendarEvent(new Date(2020, 6, 29, 10, 0), new Date(2020, 6, 29, 11, 30), 'Etudes des mécanismes', 'Erwan Contal', '2E-103', 'danger'),
        new CalendarEvent(new Date(2020, 6, 29, 17, 0), new Date(2020, 6, 29, 18, 30), 'Etudes des mécanismes', 'Erwan Contal', 'B204', 'danger'),
        new CalendarEvent(new Date(2020, 6, 29, 12, 0), new Date(2020, 6, 29, 13, 30), 'Etudes des mécanismes', 'Erwan Contal', 'C-003', 'danger'),
        new CalendarEvent(new Date(2020, 6, 29, 10, 0), new Date(2020, 6, 29, 11, 30), 'Etudes des mécanismes', 'Erwan Contal', '2E-101', 'danger'),
    ];
}

export default DailyCalendar;