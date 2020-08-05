import React from 'react';
import { IonSlide } from '@ionic/react';

interface HourRowProps {
    label: string | number;
    className?: string;
}

interface DayProps {
    hours: number;
    className?: string;
}

interface WeekProps {
    hours: number[];
    startDay: Date;
}

export function HourRow({label, className} : HourRowProps) {

    return (
        <div className={`relative flex justify-center items-center ${className}`}>
            <div className="items-center headrow flex w-full"><hr className="flex-1"/><div className="font-sans text-xs px-1 flex-1 text-center">{label}</div><hr className="flex-1"/></div>
        </div>
    );
}

export function DayCol({hours, className}: DayProps) {

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

export function Week({hours, startDay}: WeekProps) {

    const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

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
                            return (
                                <div className="flex-1 flex flex-col h-20 justify-center font-sans text-sm items-center" key={day.getTime()}>
                                    <span className="font-light">{weekDays[day.getDay() - 1]}</span>
                                    <div className="flex justify-center items-center font-bold text-white bg-blue-600 h-6 w-6 rounded-full">{day.getDate()}</div>
                                </div>
                            );
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
                                return <DayCol hours={hours.length} className="flex-1" key={day.getTime()}/>
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