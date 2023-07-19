
import React from 'react';
import { useQuery } from '@apollo/client'; 
import { Link } from 'react-router-dom'; 
import { QUERY_SLEEP_DATA } from '../utils/queries';
import Auth from '../utils/auth';

const YourPlan = () => {
  const { loading, data } = useQuery(QUERY_SLEEP_DATA);
  const sleep = data?.sleep || [];

  return (
    <div className="container mx-auto">
      <div className="px-8">
      {Auth.loggedIn() ? (
        <>
         {loading ? (
            <div>Loading...</div>
          ) : (
            JSON.stringify(sleep)
          )}
         
        </>
      ) : (
        <p>
          You need to be logged in to view your plans. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
        {/* <img src="./assets/Plan.png" alt="hikers" /> */}
        {/* <p className="my-4 text-white" style={{ textAlign: 'left', paddingRight: '20%' }}>
          Your plan content goes here
        </p> */}
      </div>
    </div>
  );
};

export default YourPlan;




