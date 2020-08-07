import React from 'react';
import { now } from '../../App';

interface VisualTimerProps {
    start: number;
    stop: number;
}

function VisualTimer(props: VisualTimerProps) {
    
    return (
    <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 items-center flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 mr-1" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
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
            return "En cours";
        } else {
            return "Done";
        }
    } else {
        return (pendingTime > 60) ? Math.round(pendingTime/60) + " h" : Math.round(pendingTime) + " min";
    }
}

export default React.memo(VisualTimer);