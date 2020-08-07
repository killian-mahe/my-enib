import React, { useState } from 'react';
import { IonAlert } from '@ionic/react';
import CalendarEvent from '../../../../models/CalendarEvent';

interface WeeklyEvent {
    event: CalendarEvent;
    style?: React.CSSProperties;
    className?: string;
}

function WeeklyEvent({event, style, className}: WeeklyEvent) {

    const [showAlert, setShowAlert] = useState(false);

    return (
        <>
            <div className={`w-full px-1 ${className}`} style={style} onClick={() => setShowAlert(true)}>
                <div className="bg-blue-500 hover:bg-blue-700 rounded w-full h-full flex flex-col content-around justify-center">
                    <span className="uppercase text-white font-sans font-bold text-sm">{_getAbbrName(event.course[0].name)}</span>
                    <span className="text-white font-sans text-2xs">{event.course[0].classRoom}</span>
                </div>
            </div>
            <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    cssClass='my-custom-class'
                    header={`${event.course[0].name} - ${event.course[0].classRoom}`}
                    subHeader={event.course[0].professor}
                    message={`De ${event.start.toHourFormat()} à ${event.stop.toHourFormat()}`}
                    buttons={['OK']}
                />
        </>
    );
}

function _getAbbrName(name: string): string {
    let splitedName = name.split(' ');
    let abbrName = "";

    if (splitedName.length > 1) {
        splitedName.forEach(e => {
            abbrName += e.slice(0, 1);
        });
    } else {
        abbrName = name.slice(0, 3);
    }

    return abbrName;
}

export default React.memo(WeeklyEvent);