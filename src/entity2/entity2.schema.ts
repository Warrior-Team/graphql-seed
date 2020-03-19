import * as fs from 'fs';
import {Entity2Connector} from './entity2.connector'

export const typeDefs = fs.readFileSync(__dirname + "/entity2.gql", "utf8");

const entity2Connector = new Entity2Connector();

export const resolvers = {
    Query: {
        getPersons() {
       return entity2Connector.getPersons();
    }
    }
}