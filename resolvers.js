import { nanoid } from 'nanoid';

class Course {
    constructor(id, { courseName, category, price, stack, language, teachers }) {
        this.id = id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.stack = stack;
        this.language = language;
        this.teachers = teachers;
    }
}

const courseCollection = {};

const resolvers = {
    getCourse: ({id}) => {
        return new Course(id, courseCollection[id])
    },

    createCourse: ({input}) => {
        let id = nanoid();
        courseCollection[id] = input;
        return new Course(id, input);
    }
}

export default resolvers;