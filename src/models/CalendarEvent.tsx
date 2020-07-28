class CalendarEvent {
    constructor(start: Date, stop: Date) {
        this.start = start;
        this.stop = stop;
    };

    start: Date;
    stop: Date;
};

export default CalendarEvent;