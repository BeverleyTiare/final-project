import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client'; //mutation hook
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });//state for form data
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState, //spread operator to retain the other key-value pairs in this object
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token); //token is returned from the loginUser mutation
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div style={{maxWidth: "1024px", margin: "40px auto"}} className="ui  segment">
    <div className="ui  form">
      {data ? (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form onSubmit={handleFormSubmit} className="ui form" style={{padding: "10px"}}>
          <div className="ui one column grid" style={{ marginBottom: "1rem", }}>
            <div class="field column">
              <label for="email">Email</label>
              <input
                className="form-input"
                id="email"
                placeholder="Email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
              />
            </div>  
            <div class="field column">
              <label for="password">Password</label>
              <input
                className="form-input"
                id="password"
                placeholder="******"
                name="password"
                type="password"
                required
                value={formState.password}
                onChange={handleChange}
              />
            </div>
          </div>
         
          <button
            className="ui bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white rounded"
            style={{ cursor: 'pointer', display: "block", margin: "0 auto", backgroundColor: "#681472", color: "white", padding: "10px 25px" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}
    </div>
  </div>
  );
};

export default Login;
