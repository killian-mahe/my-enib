import React, { useState, useEffect } from 'react';
import { BellIcon, CheckIcon, ClockIcon } from '../Icons';
import { EventState } from './dailyCalendar/components/DailyEvent';

interface VisualTimerProps {
    start: number;
    stop: number;
    state: EventState;
    onStateChanged(): void;
}

function VisualTimer(props: VisualTimerProps) {

    const [pendingTime, setPendingTime] = useState<number>(Math.round((props.start - Date.now())/(1000 * 60)));

    useEffect(() => {
        let interval = setInterval(() => {
            setPendingTime(Math.round((props.start - Date.now())/(1000 * 60)));
        }, 30000);

        let duration: number = (props.stop - props.start)/(1000 * 60);
        if (pendingTime < 0) {
            if (Math.abs(pendingTime) < duration) {
                if (props.state !== EventState.now) props.onStateChanged();
            } else {
                if (props.state !== EventState.passed) props.onStateChanged();
            }
        } else {
            if (props.state !== EventState.next) props.onStateChanged();
        }

        return () => {
            clearInterval(interval);
        };
    })

    const render = function() {
        switch (props.state) {
            case EventState.passed:
                return <>{CheckIcon} Done</>;
            case EventState.now:
                return <>{BellIcon} En cours</>;
            case EventState.next:
                return <>{ClockIcon} {(pendingTime > 60) ? Math.round(pendingTime/60) + " h" : Math.round(pendingTime) + " min"}</>
            default:
                return "Unknown"
        }
    }
    
    return (
    <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 items-center flex">
        {render()}
    </div>
    );
}

export default React.memo(VisualTimer);