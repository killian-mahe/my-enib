import React from 'react';
import CalendarEvent from '../../../../models/CalendarEvent';
import WeeklyEvent from './WeeklyEvent';

interface DayProps {
    hours: number;
    day: Date;
    className?: string;
    events?: CalendarEvent[];
}

function DayCol({hours, day, className, events}: DayProps) {

    const hoursMap = [] as number[];
    for (let index = 1; index <= hours; index++) {
        hoursMap.push(index);
    }

    const visualIndicator = () => {
        if (day.sameDay(new Date(Date.now()))) {
            return (
                <div className="w-full border-red-700 border border-solid z-10" style={{'position': 'absolute', 'top': _getPositionFromDate(new Date(Date.now()), hoursMap)}}></div>
            );
        }
    }

    return (
        <div className={`h-full flex flex-col relative ${className}`}>
            {visualIndicator()}
            {
                hoursMap.map((hour) => {
                    return <div className="flex-1 w-full border-l border-t border-solid border-gray-200" key={hour}><div className="w-full h-half border-b border-solid border-gray-100"/></div>
                })
            }
            {
                events?.map((event) => {
                    return <WeeklyEvent event={event} style={{'position': 'absolute', 'top': _getPosition(event, hoursMap), 'height': _getHeight(event, hoursMap)}} key={event.id}/>
                })
            }
        </div>
    );
}

function _getPosition(event: CalendarEvent, hours: number[]) : string {
    const start = new Date(event.start.getTime() - 8*60*60*1000);
    let percent = (start.getHours()*60 + start.getMinutes()) * 100 / (hours.length*60);
    return `${percent}%`;
}

function _getPositionFromDate(date: Date, hours: number[]) : string {
    const start = new Date(date.getTime() - 8*60*60*1000);
    let percent = (start.getHours()*60 + start.getMinutes()) * 100 / (hours.length*60);
    return `${percent}%`;
}

function _getHeight(event: CalendarEvent, hours: number[]): string {
    const period = Math.round((event.stop.getTime() - event.start.getTime()) / 60000);

    let percent = period * 100 / (hours.length*60);
    return `${percent}%`;
}

export default React.memo(DayCol);