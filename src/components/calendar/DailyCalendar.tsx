import React from 'react';
import './DailyCalendar.css';
import CalendarEvent from '../../models/CalendarEvent';

interface CalendarProps {

};

const DailyCalendar : React.FC<CalendarProps> = () => {

    let events = [
        new CalendarEvent(new Date(2019, 2, 1, 8, 0), new Date(2019, 2, 1, 20, 0))
    ];

    let renderedEvents = events.map(function(event){
        let size = (event.stop.getTime() - event.start.getTime())/(1000*60); // Difference in minutes
        let percentage = size*100/(12*60);

        return <div className="calendar-event" style={{height: percentage+"%"}}></div>
    });

    return (
        <div className="daily-calendar">
            <div className="hours-column">

            </div>
            {renderedEvents}
        </div>
    );
};

export default DailyCalendar;