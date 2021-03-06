import React, { useMemo } from 'react';
import { IonSlide } from '@ionic/react';
import DayCol from './DayCol';
import HourRow from './HourRow';
import DayHeader from './DayHeader';
import CalendarEvent from '../../../../models/CalendarEvent';
import { now } from '../../../../App';
import Preferences from '../../../../models/Preferences';

interface WeekProps {
    hours: number[];
    week: number;
    preferences: Preferences;
    events?: CalendarEvent[];
}

function Week({hours, week, preferences, events}: WeekProps) {

    console.log("Rendering Week");
    
    const computeDays = (week: number) => {
        let days: Date[] = [];
        const currentYear = now.getFullYear();
        for (let index = 0; index < 6; index++) {
            days.push(Date.getDateOfISOWeek(week, currentYear).add(index));
        }
        return days;
    }
    
    const days = useMemo(() => computeDays(week), [week]);

    return (
        <IonSlide className="flex flex-col">
                <div className="flex w-full h-20">
                    <div className="w-1/7" />
                    {
                        days.map((day) => {
                            return <DayHeader day={day} key={day.getDay()}/>
                        })
                    }
                </div>
                <div className="flex h-full w-full">
                    <div className="flex h-full flex-col w-1/7">
                        { 
                            hours.map((hour) => {
                                return <HourRow className="flex-1" label={`${hour}:00`} key={hour} />
                            })
                        }
                    </div>
                    <div className="flex h-full w-6/7">
                        {
                            days.map((day) => {
                                return <DayCol hours={hours.length} preferences={preferences} className="flex-1" key={day.getDay()} day={day} events={events?.filter((event) => { return event.start.getDay() === day.getDay()})}/>
                            })
                        }
                    </div>
                </div>
        </IonSlide>
    );
}

export default React.memo(Week);