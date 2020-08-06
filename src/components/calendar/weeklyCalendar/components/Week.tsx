import React from 'react';
import { IonSlide } from '@ionic/react';
import { DayCol } from './DayCol';
import { HourRow } from './HourRow';
import { DayHeader } from './DayHeader';
import CalendarEvent from '../../../../models/CalendarEvent';

interface WeekProps {
    hours: number[];
    startDay: Date;
    events?: CalendarEvent[];
}

export function Week({hours, startDay, events}: WeekProps) {

    let days: Date[] = [];

    for (let index = 0; index < 6; index++) {
        days.push(_add(startDay, index));
    }

    return (
        <IonSlide className="flex flex-col">
                <div className="flex w-full h-20">
                    <div className="w-1/7" />
                    {
                        days.map((day) => {
                            return <DayHeader day={day}/>
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
                                return <DayCol hours={hours.length} className="flex-1" key={day.getTime()} events={events?.filter((event) => { return event.start.getDay() === day.getDay()})}/>
                            })
                        }
                    </div>
                </div>
        </IonSlide>
    );
}

function _add(date: Date, days: number) : Date {
    return new Date(date.getTime() + days*24*60*60*1000);
}