import gql from 'graphql-tag';

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }`

export default CHARACTERS_QUERY;