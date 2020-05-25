import gql from "graphql-tag";

const LISTS_QUERY = gql`
  query Lists {
    lists {
      id
      description
      dreams {
        price
      }
    }
  }
`;

export default LISTS_QUERY;
