import { gql} from '@apollo/client';

export const QUERY_ME = gql`
query allUsers {
    allUsers {
        _id
        username
        email
        password
    }
}
`;

export const QUERY_USER = gql`
query user($username: String!) {tart
    user(username: $username) {
        _id
        username
        email
        password
    }
}
`;

export const QUERY_POSTS = gql`
query allPosts {
    allPosts {
        _id
        postText
        createdAt
        username
        commentCount
        comments {
            _id
            createdAt
            username
            commentText
        }
    }
}
`;