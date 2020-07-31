import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import { apiClient } from '../App';
import { plainToClass } from 'class-transformer';
import CalendarEvent from '../models/CalendarEvent';

function EventDetail() {
    
    const { id } = useParams();
    const [event, setEvent] = useState<CalendarEvent>();

    const fetchData = async () => {
        const response = await apiClient.get<CalendarEvent>(`/events/${id}`)
        setEvent(plainToClass(CalendarEvent, response.data));
    }
    
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Détails</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="p-5">
                    <div className="text-2xl justify-center font-sans font-medium">{event?.course[0].name}</div>
                    <div className="grid grid-cols-1 mt-3 divide-y divide-gray-300">
                        <Row attribute="Professeur" value={event?.course[0].professor}/>
                        <Row attribute="Salle" value={event?.course[0].classRoom}/>
                        <Row attribute="Durée" value={_getDuration(event)}/>
                    </div>
                </div>
            </IonContent>
        </IonPage>
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