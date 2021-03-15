import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Course {
        id: ID
        courseName: String
        category: String
        price: Int
        stack: Stack
        language: String
        teachers: [Teacher]
    }

    type Teacher {
        firstName: String
        lastName: String
        expereince: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHERS
    }

    type Query {
        getCourse(id: ID): Course
    }

    input CourseInput {
        id: ID
        courseName: String!
        category: String
        price: Int
        stack: Stack!
        language: String
        teachers: [TeacherInput]
    }

    input TeacherInput {
        firstName: String
        lastName: String
        expereince: Int
    }

    type Mutation {
        createCourse(input: CourseInput): Course
    }
`);

export default schema;
