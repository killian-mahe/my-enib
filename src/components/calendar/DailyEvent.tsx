import React from 'react';
import { IonIcon } from '@ionic/react';
import { ellipse } from 'ionicons/icons';
import VisualTimer from './VisualTimer';
import CalendarEvent from '../../models/CalendarEvent';

interface DailyEventProps{
    event: CalendarEvent;
}

function DailyEvent(props: DailyEventProps) {
    return (
            <div className="rounded overflow-hidden shadow-lg bg-white w-full">
                <div className="px-3 py-2">
                    <div className="font-bold text-md mb-2 items-center flex"><IonIcon icon={ellipse} color={props.event.course[0].color} className="mr-2"/> {props.event.course[0].name}</div>
                    <div className="grid grid-rows-2 w-full">
                        <div className="justify-between flex w-full">
                            <div className="text-gray-700 text-base">{props.event.course[0].professor}</div>
                            <div className="text-gray-700 font-bold text-base">{props.event.start.toLocaleTimeString()}</div>
                        </div>
                        <div className="justify-between flex w-full">
                            <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{props.event.course[0].classRoom}</div>
                            <VisualTimer start={props.event.start.getTime()} stop={props.event.stop.getTime()} />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default DailyEvent;