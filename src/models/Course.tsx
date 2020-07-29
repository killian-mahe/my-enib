class Course {
    constructor(name: string, professor: string, classRoom: string, color: string) {
        this.name = name;
        this.professor = professor;
        this.classRoom = classRoom;
        this.color = color;
    }

    name: string;
    professor: string;
    classRoom: string;
    color: string;
}

export default Course;