import React, { useRef, useMemo } from 'react';
import { IonSlides } from '@ionic/react';
import Week from './components/Week';
import { now } from '../../../App';
import CalendarEvent from '../../../models/CalendarEvent';
// import { plainToClass } from 'class-transformer';

interface WeeklyCalendarProps {
    className?: string;
    events: CalendarEvent[];
}

interface SlidesProps {
    hours: number[];
    weeks: number[];
    events?: CalendarEvent[];
}

function WeeklyCalendar(props: WeeklyCalendarProps) {

    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const currentWeek = now.getWeek();
    
    const getListOfWeeks = (currentWeek: number) => {
        let weeks: number[] = [];
        for (let weekIndex = -2; weekIndex <= 7; weekIndex++) {
            weeks.push(currentWeek + weekIndex);
        }
        return weeks;
    }

    const weeks = useMemo(() => getListOfWeeks(currentWeek), [currentWeek]);

    console.log("Rendering WeeklyCalendar");

    return (
        <div className={`container h-full ${props.className}`}>
            {weeks ? <Slides hours={hours} weeks={weeks} events={props.events}/> : <></>}
        </div>
    );
}

const slideOpts = {
    initialSlide: 2
  };

function Slides(props: SlidesProps) {

    const slidesRef = useRef() as React.MutableRefObject<HTMLIonSlidesElement>;

    return (
        <IonSlides className="w-full weekly-calendar" options={slideOpts} ref={slidesRef}>
            {
                props.weeks?.map((week) => {
                    return <Week hours={props.hours} key={week} week={week} events={props.events?.filter((event) => { return event.start.getWeek() === week})}/>
                })
            }
        </IonSlides>
    );
}

export default React.memo(WeeklyCalendar);