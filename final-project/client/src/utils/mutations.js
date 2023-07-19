//check match with server utils

import { gql } from '@apollo/client';

//Query user data
export const LOGIN_USER = gql`
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

//add user data
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// add sleep
export const ADD_SLEEP = gql`
  mutation addSleep($responses: [ResponseInput]!) {
    addSleep(responses: $responses) {
     _id 
    }
  }
`;

//update sleep plan
export const UPDATE_SLEEP_PLAN = gql`
  mutation updateSleepPlan($sleepId: ID!, $plan: String!) {
    updateSleepPlan(sleepId: $sleepId, plan: $plan) {
      _id
      plan
    }
  }
`;




/*export const ADD_COMMENT = gql`
  mutation addComment(
    $thoughtId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      thoughtId: $thoughtId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;*/
