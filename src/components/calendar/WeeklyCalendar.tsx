import React, { useState, useRef, useEffect } from 'react';
import { IonSlides } from '@ionic/react';
import { Week } from './weeklyCalendar/components';

interface WeeklyCalendarProps {
    className?: string;
}

interface SlidesProps {
    hours: number[];
    days: string[];
    weeks: Date[];
}

function WeeklyCalendar(props: WeeklyCalendarProps) {

    const [weeks, setWeeks] = useState<Date[]>();

    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    useEffect(() => {
        const now = new Date(Date.now());
        let tempWeeks: Date[] = [];
        for (let week = -7; week <= 7; week++) {
            tempWeeks.push(_add(now, week*7));
        }
        setWeeks(tempWeeks);
    }, []);

    return (
        <div className={`container h-full ${props.className}`}>
            {weeks ? <Slides hours={hours} days={days} weeks={weeks}/> : <></>}
        </div>
    );
}

function Slides(props: SlidesProps) {

    const slidesRef = useRef() as React.MutableRefObject<HTMLIonSlidesElement>;

    useEffect(() => {
        slidesRef.current?.length().then((length) => {
            slidesRef.current.slideTo(length / 2, 0);
        })
    }, [slidesRef]);

    return (
        <IonSlides className="h-3/2 w-full" ref={slidesRef}>
            {
                props.weeks?.map(() => {
                    return <Week hours={props.hours} days={props.days}/>
                })
            }
        </IonSlides>
    );
}

function _add(date: Date, days: number) : Date {
    return new Date(date.getTime() + days*24*60*60*1000);
}

export default WeeklyCalendar;