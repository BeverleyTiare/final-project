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
  mutation addSleep($responses: [ResponseInput]!, $score: Int!, $category: String!) {
    addSleep(responses: $responses, score: $score, category: $category) {
     _id 
    }
  }
`;


//update sleep notes
export const UPDATE_SLEEP_NOTES = gql`
  mutation updateSleepNotes($sleepId: ID!, $notes: String!) {
    updateSleepNotes(sleepId: $sleepId, notes: $notes) {
      _id
      notes
    }
  }
`;


