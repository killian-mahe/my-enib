import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import CalendarEvent from '../models/CalendarEvent';

interface EventDetailProps {
    event: CalendarEvent;
    className?: string | undefined;
    onClose?(): void;
}

function EventDetail(props: EventDetailProps) {
    
    return (
            <div className={`p-6 h-full z-20 ${props.className}`}>
                <div className="flex items-center w-auto mb-4" onClick={() => { if(props.onClose) props.onClose() }}>
                    <IonIcon icon={chevronBack} className="text-blue-800" size='large'/>
                    <span className="text-base text-blue-800 font-sans font-bold">Back</span>
                </div>
                <div className="overflow-y-scroll h-9/10">
                    <div className="text-2xl justify-center font-sans font-medium">{props.event.course[0].name}</div>
                    <div className="grid grid-cols-1 mt-3 divide-y divide-gray-300">
                        <Row attribute="Professeur" value={props.event.course[0].professor}/>
                        <Row attribute="Salle" value={props.event.course[0].classRoom}/>
                        <Row attribute="Durée" value={_getDuration(props.event)}/>
                        <Row attribute="De" value={props.event.start.toHourFormat()}/>
                        <Row attribute="A" value={props.event.stop.toHourFormat()}/>
                    </div>
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

    let duration = new Date(event.stop.getTime() - event.start.getTime() - 60*60*1000);
    return duration.getHours() >= 1 ? `${duration.toHourFormat()}` : `${Math.round(duration.getMinutes())} min`;
}

export default EventDetail;