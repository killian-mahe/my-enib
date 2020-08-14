import { Type } from 'class-transformer';

export default class Event {
    constructor(start: Date, stop: Date) {
        this.start = start;
        this.stop = stop;
    }

    @Type(() => Date)
    start: Date;
    @Type(() => Date)
    stop: Date;
}