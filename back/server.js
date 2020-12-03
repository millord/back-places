const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

// set env variables

dotenv.config();
app.use(cors(cors));
app.use(express.json());

let port = 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));
