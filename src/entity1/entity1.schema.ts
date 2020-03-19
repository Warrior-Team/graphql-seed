import * as fs from 'fs';
import {Entity1Connector} from './entity1.connector';

export const typeDefs = fs.readFileSync(__dirname + "/entity1.gql", "utf8");

const entity1Connector = new Entity1Connector();

export const resolvers = {
    Query: {
        getBooks() {
         return entity1Connector.getBooks();
        }
    }
}