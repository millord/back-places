const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

// set env variables

dotenv.config();
app.use(cors(cors));
app.use(express.json());

// typedef
const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

// resolver
const resolvers = {
  Query: {
    hello: () => "hello word!",
  },
};

// setting up graphql

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

let port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`GraphQl enpoint: ${apolloServer.graphqlPath}`);
});
