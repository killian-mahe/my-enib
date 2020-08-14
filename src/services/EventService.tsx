import { Plugins } from '@capacitor/core';
import CalendarEvent from '../models/CalendarEvent';
import { _mockEvents } from '../components/Utilities';
const { Storage } = Plugins;

export default class EventService {
    constructor() {
        
    }

    static async getEvents() : Promise<CalendarEvent[]> 
    {
        if (true){
            return _mockEvents().sort((a, b) => {
                return a.start.getTime() - b.start.getTime();
            })
        } else {
            const { value } = await Storage.get({key: 'calendarEvents'});
            console.log(value);
            return JSON.parse(value!) as CalendarEvent[];
        }
    }

    static async saveEvents(events: CalendarEvent[]) 
    {
        await Storage.set({key: 'calendarEvents', value: JSON.stringify(events)});
    }
}