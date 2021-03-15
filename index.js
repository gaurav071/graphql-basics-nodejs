import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema.js';
import resolvers from './resolvers.js';

const app = express();

const root = resolvers;

app.get('/', (req, res) => {
    res.send('GraphQL Basics');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: root

}))

app.listen(3001, () => console.log('Express server running at port 3001'));
