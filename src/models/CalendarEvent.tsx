import Course from './Course';
import { Type } from 'class-transformer';
import Event from './Event';

export default class CalendarEvent extends Event {
    static id = 0;

    constructor(start: Date, stop: Date, name: string, professor: string, classRoom: string, color: string) {
        super(start, stop);
        this.id = CalendarEvent.id;
        this.course = [new Course(name, professor, classRoom, color)];
        CalendarEvent.id ++;
    };

    id: number

    @Type(() => Course)
    course : [Course];
};