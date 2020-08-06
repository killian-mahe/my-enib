import React, { useState, useRef, useEffect } from 'react';
import { IonSlides } from '@ionic/react';
import { Week } from './components/Week';
import { apiClient } from '../../../App';
import CalendarEvent from '../../../models/CalendarEvent';
import { plainToClass } from 'class-transformer';
import { _mockEvents } from '../../Utilities';

interface WeeklyCalendarProps {
    className?: string;
}

interface SlidesProps {
    hours: number[];
    weeks: Date[];
    events?: CalendarEvent[];
}

function WeeklyCalendar(props: WeeklyCalendarProps) {

    const [weeks, setWeeks] = useState<Date[]>();

    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const [events, setEvents] = useState<CalendarEvent[]>();

    const fetchData = async () => {
        const response = await apiClient.get<CalendarEvent[]>('/events')
        
        // setEvents(plainToClass(CalendarEvent, response.data).sort((a, b) => {
        //     return a.start.getTime() - b.start.getTime();
        // }));

        setEvents(_mockEvents().sort((a, b) => {
            return a.start.getTime() - b.start.getTime();
        }));
    }

    useEffect(() => {
        const now = new Date(Date.now());
        let tempWeeks: Date[] = [];
        for (let week = -7; week <= 7; week++) {
            tempWeeks.push(_getFirstDayOfTheWeek(_add(now, week*7)));
        }
        setWeeks(tempWeeks);
        fetchData();
    }, []);

    return (
        <div className={`container h-full ${props.className}`}>
            {weeks ? <Slides hours={hours} weeks={weeks} events={events}/> : <></>}
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
        <IonSlides className="h-5/4 w-full" ref={slidesRef}>
            {
                props.weeks?.map((week) => {
                    return <Week hours={props.hours} startDay={week} key={week.getTime()} events={props.events?.filter((event) => { return event.start.getWeek() === week.getWeek()})}/>
                })
            }
        </IonSlides>
    );
}

function _add(date: Date, days: number) : Date {
    return new Date(date.getTime() + days*24*60*60*1000);
}

function _getFirstDayOfTheWeek(date: Date) : Date{
    return new Date(_add(date, 1 - date.getDay()));
}

export default WeeklyCalendar;