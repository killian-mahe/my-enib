import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { alarmOutline } from 'ionicons/icons';

function getWaitTime(start: number, stop: number) {
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

function VisualTimer(props: any) {
    const [startTime, setStartTime] = useState(props.start);
    const [stopTime, setStopTime] = useState(props.stop);

    return <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 items-center flex"><IonIcon icon={alarmOutline} className="mr-1"/> {getWaitTime(startTime, stopTime)}</div>;
}

export default VisualTimer;