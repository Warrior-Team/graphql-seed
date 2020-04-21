import {resolvers as rootResolvers, typeDefs as rootTypeDefs} from './root/root.schema';
// const { HttpLink } = require('apollo-server');
// const { ApolloGateway } = require('@apollo/gateway');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema, makeRemoteExecutableSchema , introspectSchema} = require('graphql-tools');
import * as _ from 'lodash'

// import * as graphqlTools from 'graphql-tools';

const { HttpLink } = require('apollo-link-http');
// import { HttpLink } from 'apollo-link-http';
// // const { ApolloGateway } = require('@apollo/gateway');
// import express from 'express';
// import bodyParser from 'body-parser';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import { makeExecutableSchema, makeRemoteExecutableSchema , introspectSchema, mergeSchemas} from 'graphql-tools';

export class Entity1Connector111{

  static async remoteSchema()
    {
      const introspectionResult = await introspectSchema(
      new HttpLink({ uri: 'http://localhost:3333/graphql' })
    );

    const remoteSchema = await makeRemoteExecutableSchema({
      schema: introspectionResult,
      link: new HttpLink({ uri: 'http://localhost:3333/graphql' })
    });
    console.log(remoteSchema);
    return remoteSchema;
  }


  static async currentSchema() {
      // The GraphQL schema in string form
    const typeDefs = rootTypeDefs;

    // The resolvers
    const resolvers = rootResolvers;

    // Put together a schema
    const currentSchema = makeExecutableSchema({
      typeDefs,
      resolvers,
    });
console.log(currentSchema._typeMap.Query);
    return currentSchema._typeMap;
  }

}
const schema4= Entity1Connector111.currentSchema();

//  const typeDefs = [ Entity1Connector111.remoteSchema()];

// const schema3 = mergeSchemas({
//   schemas: [
//     Entity1Connector111.currentSchema(),
//     Entity1Connector111.remoteSchema()
//   ]
// });

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema4 }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Server is running now in URL http://localhost:3000/graphiql !!!!!');
});