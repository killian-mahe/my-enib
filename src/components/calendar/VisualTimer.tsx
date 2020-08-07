import React from 'react';
import { now } from '../../App';
import { BellIcon, CheckIcon, ClockIcon } from '../Icons';

interface VisualTimerProps {
    start: number;
    stop: number;
}

function VisualTimer(props: VisualTimerProps) {
    
    return (
    <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 items-center flex">
        {_getWaitTime(props.start, props.stop)}
    </div>
    );
}

function _getWaitTime(start: number, stop: number) {
    let duration: number = (stop - start)/(1000 * 60);
    let pendingTime = (start - now.getTime())/(1000 * 60);
    
    pendingTime = Math.round(pendingTime);
    if (pendingTime < 0) {
        if (Math.abs(pendingTime) < duration) {
            return <>{BellIcon} En cours</>;
        } else {
            return <>{CheckIcon} Done</>;
        }
    } else {
        return <>{ClockIcon} {(pendingTime > 60) ? Math.round(pendingTime/60) + " h" : Math.round(pendingTime) + " min"}</>
    }
}

export default React.memo(VisualTimer);