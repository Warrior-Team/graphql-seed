import * as fs from 'fs';
import * as _ from 'lodash'
import {resolvers as Entity1Resolvers, typeDefs as Entity1TypeDefs} from '../entity1/entity1.schema';
import {resolvers as Entity2Resolvers, typeDefs as Entity2TypeDefs} from '../entity2/entity2.schema';


export const typeDefs = [fs.readFileSync(__dirname + "/root.gql", "utf8"), Entity1TypeDefs, Entity2TypeDefs];

export const resolvers = _.merge( Entity1Resolvers, Entity2Resolvers);