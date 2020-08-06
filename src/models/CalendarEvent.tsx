import Course from './Course';
import { Type } from 'class-transformer';

class CalendarEvent {
    static id = 0;

    constructor(start: Date, stop: Date, name: string, professor: string, classRoom: string, color: string) {
        this.id = CalendarEvent.id;
        this.start = start;
        this.stop = stop;
        this.course = [new Course(name, professor, classRoom, color)];
        CalendarEvent.id ++;
    };

    id: number
    @Type(() => Date)
    start: Date;
    @Type(() => Date)
    stop: Date;

    @Type(() => Course)
    course : [Course];
};

export default CalendarEvent;