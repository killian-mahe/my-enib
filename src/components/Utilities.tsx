import React from 'react';
import CalendarEvent from '../models/CalendarEvent';

interface DividerProps {
    label: string;
    className?: string;
}

export function Divider (props: DividerProps) {
    return <div className={`flex items-center px-3 ${props.className}`}><hr className="flex-1" /><div className="w-auto px-2 text-gray-700 font-sans font-medium">{props.label}</div><hr className="flex-1"/></div>
}

export function _mockEvents(): CalendarEvent[] {
    return [
        new CalendarEvent(new Date(2020, 7, 5, 14, 30), new Date(2020, 7, 5, 16, 45), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 7, 5, 8, 30), new Date(2020, 7, 5, 10, 0), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 7, 6, 16, 5), new Date(2020, 7, 6, 18, 50), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 7, 6, 14, 0), new Date(2020, 7, 6, 15, 0), 'Electronique', 'Céline Ansquer', 'D103', 'blue'),
        new CalendarEvent(new Date(2020, 6, 28, 14, 30), new Date(2020, 6, 28, 16, 45), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 6, 28, 8, 30), new Date(2020, 6, 28, 10, 0), 'Etude des mécanismes', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 6, 30, 16, 5), new Date(2020, 6, 30, 18, 50), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 6, 21, 14, 30), new Date(2020, 6, 21, 16, 45), 'Conduite Projet Objet', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 6, 21, 8, 30), new Date(2020, 6, 21, 10, 0), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 6, 24, 16, 5), new Date(2020, 6, 24, 18, 50), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 7, 12, 14, 30), new Date(2020, 7, 12, 16, 45), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 7, 12, 8, 30), new Date(2020, 7, 12, 10, 0), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 7, 14, 16, 5), new Date(2020, 7, 14, 18, 50), 'Analyse', 'Eric Boucharé', '2E-206', 'blue'),
    ];
}