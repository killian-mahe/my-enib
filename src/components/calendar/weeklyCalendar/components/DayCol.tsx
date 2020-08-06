import React from 'react';
import CalendarEvent from '../../../../models/CalendarEvent';
import { WeeklyEvent } from './WeeklyEvent';

interface DayProps {
    hours: number;
    className?: string;
    events?: CalendarEvent[];
}

export function DayCol({hours, className, events}: DayProps) {

    const hoursMap = [] as number[];
    for (let index = 1; index <= hours; index++) {
        hoursMap.push(index);
    }

    return (
        <div className={`h-full flex flex-col relative ${className}`}>
            {
                hoursMap.map((hour) => {
                    return <div className="flex-1 w-full border-l border-t border-solid border-gray-200 flex items-center" key={hour}><hr className="w-full border-dashed opacity-75 border-gray-200"/></div>
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

function _getHeight(event: CalendarEvent, hours: number[]): string {
    const period = Math.round((event.stop.getTime() - event.start.getTime()) / 60000);

    let percent = period * 100 / (hours.length*60);
    return `${percent}%`;
}