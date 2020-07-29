import Course from './Course';

class CalendarEvent {
    constructor(start: Date, stop: Date, name: string, professor: string, classRoom: string, color: string) {
        this.start = start;
        this.stop = stop;
        this.course = new Course(name, professor, classRoom, color);
    };

    start: Date;
    stop: Date;
    course : Course;
};

export default CalendarEvent;