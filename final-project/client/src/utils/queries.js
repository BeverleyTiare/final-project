//check match with server utils

import { gql } from '@apollo/client';

// Query user data
export const QUERY_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

// Query sleep data
export const QUERY_SLEEP_DATA = gql`
  query getSleepData($username: String!) {
    sleepData(username: $username) {
      _id
      sleepDataText
      sleepDataAuthor
      createdAt
    }
  }
`;

// Query single sleep data
export const QUERY_SINGLE_SLEEP_DATA = gql`
  query getSingleSleepData($singleSleepDataId: ID!) {
    singleSleepData(singleSleepDataId: $singleSleepDataId) {
      _id
      sleepDataText
      sleepDataAuthor
      createdAt
    }
  }
`;
