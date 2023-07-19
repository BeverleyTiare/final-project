import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Sleep from './pages/Sleep';
import Epigenetics from './pages/Epigenetics';
import PreventativeHealthcare from './pages/PreventativeHealthcare';
import YourPlan from './pages/YourPlan';
// import SleepData from './pages/SleepData';
// import Profile from './pages/Profile';

// Construct main GraphQL API 'endpoint' that will connect ApolloClient instance with the GraphQL API
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return ( 
    <ApolloProvider client={client}>
      <Router>
        <div style={{    minHeight: '100vh',
    flexDirection: 'column',
    display: 'flex'}}>
          <Header />
          <div className="container" style={{margin: "0 auto"}}>
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/epigenetics" 
                element={<Epigenetics/>} 
              />
              <Route 
                path="/preventativehealthcare" 
                element={<PreventativeHealthcare />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route
                path="/sleep"
                element={<Sleep />}
              /> 
               <Route
                path="/yourplan"
                element={<yourplan />}
              />  
              {/* <Route 
                path="/me" 
                element={<Profile />}//Profile
              /> */}
              {/* <Route 
                path="/profiles/:username" //Profile
                element={<Profile />}
              /> */}
              {/* <Route 
                path="/sleepdata" 
                element={<SleepData />} // sleepdata
              /> */}
            </Routes>
            {/* <BrainImage /> */}
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
