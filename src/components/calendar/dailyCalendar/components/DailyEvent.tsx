import React from 'react';
import VisualTimer from '../../VisualTimer';
import CalendarEvent from '../../../../models/CalendarEvent';

interface DailyEventProps{
    event: CalendarEvent;
    state: EventState;
    onStateChanged(): void;
}

export enum EventState {
    passed,
    now,
    next
}

function DailyEvent(props: DailyEventProps) {

    return (
            <div className={`rounded relative overflow-hidden bg-white w-full ${props.state === EventState.now ? 'border-blue-700 border-2' : ''}`}>
                <div className={`absolute inset-0 bg-gray-800 opacity-50 ${props.state === EventState.passed ? '' : 'hidden'}`}>
                </div>
                <div className="px-3 py-2">
                    <div className="font-bold text-md mb-2 items-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 text-gray-500 mr-1" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>{props.event.course[0].name}</div>
                    <div className="grid grid-rows-2 w-full">
                        <div className="justify-between flex w-full">
                            <div className="text-gray-700 text-base">{props.event.course[0].professor}</div>
                            <div className="text-gray-700 font-bold text-base">{props.event.start.toHourFormat()}</div>
                        </div>
                        <div className="justify-between flex w-full">
                            <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{props.event.course[0].classRoom}</div>
                            <VisualTimer start={props.event.start.getTime()} stop={props.event.stop.getTime()} state={props.state} onStateChanged={props.onStateChanged}/>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default React.memo(DailyEvent);