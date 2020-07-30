class Course {
    constructor(name: string, professor: string, classRoom: string, color: string = "primary") {
        this.name = name;
        this.professor = professor;
        this.classRoom = classRoom;
        this.color = color;
    }

    name: string;
    professor: string;
    classRoom: string;
    color: string = "primary";
}

export default Course;