import {resolvers as rootResolvers, typeDefs as rootTypeDefs} from './root/root.schema';

const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// The GraphQL schema in string form
const typeDefs = rootTypeDefs;

// The resolvers
const resolvers = rootResolvers;

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Server is running now in URL http://localhost:3000/graphiql !!!!!');
});