import { gql } from 'apollo-server-express';

const TYPEDEFS = gql`
  type Team {
    owner: User!,
    member: [User!]!,
    channels: [Channel!]!
  }

  type Channel {
    id: Int!,
    name: String!,
    public: Boolean!,
    messages: [Message!]!,
    users: [User!]!
  }

  type Message {
    id: Int!,
    text: Int!,
    user: User!,
    channel: Channel!
  }

  type User {
    id: Int!,
    username: String!,
    email: String!,
    teams: [Team!]!
  }

  type Query {
    hi: String
  }
`;

export default TYPEDEFS;
