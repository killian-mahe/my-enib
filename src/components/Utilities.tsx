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
        new CalendarEvent(new Date(2020, 7, 7, 8, 5), new Date(2020, 7, 7, 9, 30), 'Analyse', 'Mohamed Belghiti', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 7, 7, 9, 40), new Date(2020, 7, 7, 11, 5), 'Electronique', 'Abdesslam Benzinou', '2E-207', 'blue'),
        new CalendarEvent(new Date(2020, 7, 7, 11, 15), new Date(2020, 7, 7, 12, 40), 'Sciences Humaines Ingénieur', 'Delphine Toquet', '2E-211', 'blue'),

        new CalendarEvent(new Date(2020, 7, 7, 15, 30), new Date(2020, 7, 7, 15, 45), 'Anglais', 'Susanna Wesson', 'B212', 'blue'),
        new CalendarEvent(new Date(2020, 7, 7, 16, 7), new Date(2020, 7, 7, 17, 20), 'Automatisme', 'Laurent Pelt', 'D005', 'blue'),
        new CalendarEvent(new Date(2020, 7, 7, 17, 30), new Date(2020, 7, 7, 18, 55), 'Chinois', 'Xi Jinping', 'B210', 'blue'),

        new CalendarEvent(new Date(2020, 7, 10, 8, 5), new Date(2020, 7, 10, 9, 30), 'Analyse', 'Mohamed Belghiti', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 7, 10, 9, 40), new Date(2020, 7, 10, 11, 5), 'Electronique', 'Abdesslam Benzinou', '2E-207', 'blue'),
        new CalendarEvent(new Date(2020, 7, 10, 11, 15), new Date(2020, 7, 10, 12, 40), 'Sciences Humaines Ingénieur', 'Delphine Toquet', '2E-211', 'blue'),

        new CalendarEvent(new Date(2020, 7, 10, 15, 30), new Date(2020, 7, 10, 15, 45), 'Anglais', 'Susanna Wesson', 'B212', 'blue'),
        new CalendarEvent(new Date(2020, 7, 10, 16, 7), new Date(2020, 7, 10, 17, 20), 'Automatisme', 'Laurent Pelt', 'D005', 'blue'),
        new CalendarEvent(new Date(2020, 7, 10, 17, 30), new Date(2020, 7, 10, 18, 55), 'Chinois', 'Xi Jinping', 'B210', 'blue'),

        new CalendarEvent(new Date(2020, 7, 11, 8, 5), new Date(2020, 7, 11, 9, 30), 'Analyse', 'Mohamed Belghiti', '2E-206', 'blue'),
        new CalendarEvent(new Date(2020, 7, 11, 9, 40), new Date(2020, 7, 11, 11, 5), 'Electronique', 'Abdesslam Benzinou', '2E-207', 'blue'),
        new CalendarEvent(new Date(2020, 7, 11, 11, 15), new Date(2020, 7, 11, 12, 40), 'Sciences Humaines Ingénieur', 'Delphine Toquet', '2E-211', 'blue'),

        new CalendarEvent(new Date(2020, 7, 11, 15, 30), new Date(2020, 7, 11, 15, 45), 'Anglais', 'Susanna Wesson', 'B212', 'blue'),
        new CalendarEvent(new Date(2020, 7, 11, 16, 7), new Date(2020, 7, 11, 17, 20), 'Automatisme', 'Laurent Pelt', 'D005', 'blue'),
        new CalendarEvent(new Date(2020, 7, 11, 17, 30), new Date(2020, 7, 11, 18, 55), 'Chinois', 'Xi Jinping', 'B210', 'blue'),

        new CalendarEvent(new Date(2020, 7, 4, 8, 5), new Date(2020, 7, 4, 11, 5), 'Conduite Projet Objet', 'Susanna Wesson', 'B212', 'blue'),
        new CalendarEvent(new Date(2020, 7, 4, 12, 45), new Date(2020, 7, 4, 14, 10), 'Eletronique de puissance', 'Laurent Pelt', 'D005', 'blue'),


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