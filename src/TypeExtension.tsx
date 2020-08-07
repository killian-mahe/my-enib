export {}

declare global {
    interface Date {
        getWeek(): number;
        toHourFormat(): string;
        add(days?: number, hours?: number, minutes?: number): Date;
        sameDay(date: Date) : boolean;
    }

    interface DateConstructor {
        getDateOfISOWeek(week: number, year: number): Date;
    }
}

// eslint-disable-next-line
Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                            - 3 + (week1.getDay() + 6) % 7) / 7);
}
// eslint-disable-next-line
Date.prototype.toHourFormat = function() {
    let hours = this.getHours();
    let minutes = this.getMinutes();
    if (minutes < 10) {
        return `${hours}h0${minutes}`;
    } else {
        return `${hours}h${minutes}`;
    }
}
// eslint-disable-next-line
Date.prototype.add = function (days: number = 0, hours: number = 0, minutes: number = 0) : Date {
    const timestampToAdd = ((days*24 + hours)*60 + minutes)*60*1000;
    return new Date(this.getTime() + timestampToAdd);
}
// eslint-disable-next-line
Date.prototype.sameDay = function (date: Date) : boolean {
    return this.getMonth() === date.getMonth() && this.getDate() === date.getDate();
}

Date.getDateOfISOWeek = function (week: number, year: number) : Date{
    var simple = new Date(year, 0, 1 + (week - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
}