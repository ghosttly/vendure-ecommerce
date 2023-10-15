import gql from "graphql-tag";
export const adminApiExtensions = gql`
  type StoreGiftItem implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    inStock: Int!
  }

  extend type Query {
    getGiftStoreItems: [StoreGiftItem]!
  }

  extend type Mutation {
    createGiftStoreItem(name: String!, inStock: Int!): Boolean!
  }
`;
