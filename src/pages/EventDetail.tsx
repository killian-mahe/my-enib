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

            </IonContent>
        </IonPage>
    );
}

export default EventDetail;