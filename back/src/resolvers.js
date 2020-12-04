const { gql } = require("apollo-server-express");

module.exports.resolvers = gql`
   Query: {
     hello: () => 'hello world!'
   }
`;
