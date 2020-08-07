import React from 'react';
import { now } from '../../../../App';

interface DayHeaderProps {
    day: Date;
}

function DayHeader({ day }: DayHeaderProps) {

    const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

    let color = "";
    if (now.sameDay(day)) color = "text-white bg-blue-600"

    return (
        <div className="flex-1 flex flex-col h-20 justify-center font-sans text-sm items-center">
            <span className="font-light">{weekDays[day.getDay() - 1]}</span>
            <div className={`flex justify-center items-center font-bold h-6 w-6 rounded-full ${color}`}>{day.getDate()}</div>
        </div>
    );
}

export default React.memo(DayHeader);