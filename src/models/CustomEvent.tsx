import Event from './Event';

export default class CustomEvent extends Event {
    constructor(start: Date, stop: Date, name: string) {
        super(start, stop);
        this.name = name;
    }

    name: string;
}