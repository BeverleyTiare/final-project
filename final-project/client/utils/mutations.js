import {gql} from apollo/client;

import const ADD_PROFILE = gql`
mutation addProfile($profileText: String!) {
    addProfile(profileText: $profileText) {
        _id
        profileText
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

export const ADD_COMMENT = gql`
mutation addComment($profileId: ID!, $commentText: String!) {
    addComment(profileId: $profileId, commentText: $commentText) {
        _id
        commentCount
        comments {
            _id
            commentText
            createdAt
            username
        }
    }
}
`;

export const LOGIN-USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;
