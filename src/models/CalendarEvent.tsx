import Course from './Course';
import { Type } from 'class-transformer';

class CalendarEvent {
    constructor(start: Date, stop: Date, name: string, professor: string, classRoom: string, color: string) {
        this.id = 0;
        this.start = start;
        this.stop = stop;
        this.course = [new Course(name, professor, classRoom, color)];
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