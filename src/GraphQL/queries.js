import gql from 'graphql-tag';

export const USERS_QUERY = gql`
  {
    viewer {
      login
      name
      avatarUrl
    }
  }
`;

export const TOP_REPOS = gql`
  {
    search(
      query: "language:JavaScript stars:>10000"
      type: REPOSITORY
      first: 10
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            url
            name
            descriptionHTML
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }
`;
