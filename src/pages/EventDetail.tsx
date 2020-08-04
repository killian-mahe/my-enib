import React from 'react';
import CalendarEvent from '../models/CalendarEvent';
import { IonIcon } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';

interface EventDetailProps {
    event: CalendarEvent;
    className?: string | undefined;
    onClose?(): void;
}

function EventDetail(props: EventDetailProps) {
    
    return (
            <div className={`p-6 ${props.className}`}>
                <div className="flex items-center w-auto mb-4" onClick={() => { if(props.onClose) props.onClose() }}>
                    <IonIcon icon={chevronBack} className="text-blue-800" size='large'/>
                    <span className="text-base text-blue-800 font-sans font-bold">Back</span>
                </div>
                <div className="text-2xl justify-center font-sans font-medium">{props.event.course[0].name}</div>
                <div className="grid grid-cols-1 mt-3 divide-y divide-gray-300">
                    <Row attribute="Professeur" value={props.event.course[0].professor}/>
                    <Row attribute="Salle" value={props.event.course[0].classRoom}/>
                    <Row attribute="Durée" value={_getDuration(props.event)}/>
                </div>
            </div>
    );
}

interface RowProps {
    attribute: string;
    value: string | undefined;
}

function Row(props: RowProps) {
    return (
        <div className="py-3 grid grid-cols-2">
            <div className="font-semibold font-sans">{props.attribute}</div>
            <div className="text-right">{props?.value}</div>
        </div>
    );
}

function _getDuration(event: CalendarEvent | undefined) {
    if (!event) return undefined;

    let duration = event.stop.getTime() - event.start.getTime();
    duration /= (1000*60);
    return duration > 100 ? `${Math.round((duration/60))} h` : `${Math.round(duration)} min`;
}

export default EventDetail;