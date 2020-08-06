import React from 'react';
import CalendarEvent from '../../../../models/CalendarEvent';

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
        <div className={`h-full flex flex-col ${className}`}>
            {
                hoursMap.map((hour) => {
                    return <div className="flex-1 w-full border-l border-t border-solid border-gray-200" key={hour}></div>
                })
            }
        </div>
    );
}