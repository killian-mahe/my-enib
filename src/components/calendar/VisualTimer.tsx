import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { alarmOutline } from 'ionicons/icons';

interface VisualTimerProps {
    start: number;
    stop: number;
}

function VisualTimer(props: VisualTimerProps) {
    const [startTime, setStartTime] = useState(props.start);
    const [stopTime, setStopTime] = useState(props.stop);
    
    return <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 items-center flex"><IonIcon icon={alarmOutline} className="mr-1"/> {_getWaitTime(startTime, stopTime)}</div>;
}

function _getWaitTime(start: number, stop: number) {
    let duration: number = (stop - start)/(1000 * 60);
    let pendingTime = (start - Date.now())/(1000 * 60);
    
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

export default VisualTimer;