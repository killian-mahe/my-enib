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
    days: string[];
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
                    return <div className="flex-1 w-full border-l border-t border-solid border-gray-200"></div>
                })
            }
        </div>
    );
}

export function Week({hours, days}: WeekProps) {

    return (
        <IonSlide>
            <div className="h-full mt-12 w-full">
                <div className="flex h-full w-full">
                    <div className="flex h-full flex-col w-1/6">
                        { 
                            hours.map((hour) => {
                                return <HourRow className="flex-1" label={`${hour}:00`} key={hour} />
                            })
                        }
                    </div>
                    <div className="flex h-full w-5/6">
                        {
                            days.map((day) => {
                                return <DayCol hours={hours.length} className="flex-1"/>
                            })
                        }
                    </div>
                </div>
            </div>
        </IonSlide>
    );
}