//useState and useEffect hooks enable us to manage state in functional components
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

//useState and useEffect hooks enable management of state in functional components
const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    terms: false,
  });

//mutation hook 
  const [addUser, { error, data }] = useMutation(ADD_USER);

  //function to handle form input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormState({
      ...formState,
      [name]: fieldValue,
    });
  };

  useEffect(() => {
    // $('.ui.form')
     //  .form({
     //    fields: {
     //      name: 'empty',
      //     username: 'empty',
      //     password: ['minLength[6]', 'empty'],
      //     skills: ['minCount[2]', 'empty'],
      //     terms: 'checked',
      //   },
   //    });
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.password !== formState.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    if (!formState.terms) {
      alert('Please agree to the terms to continue');
      return;
    }


    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      console.log(data)

      //Auth login method to log the user in once they have signed up
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      alert(e.message)
    }
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
              <div className="ui one column grid">
                <div className="two column row">
                  <div className="field column">
                    <label for="first-name">First Name</label>
                    <input
                      className="form-input"
                      id="first-name"
                      placeholder="First Name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field column">
                    <label for="last-name">Last Name</label>
                    <input
                      className="form-input"
                      id="last-name"
                      placeholder="Last Name"
                      name="username"
                      type="text"
                      required
                      value={formState.username}
                      onChange={handleChange}
                    />
                  </div>
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
                <div class="field column">
                  <label for="confirm-password">Confirm Password</label>
                  <input
                    className="form-input"
                    id="confirm-password"
                    placeholder="******"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formState.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
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
              </div>
              <div className="inline field">
                <div className="ui checkbox" style={{marginTop: "30px"}}>
                  <input
                    id="terms"
                    type="checkbox"
                    tabindex="0"
                    name="terms"
                    required
                    checked={formState.terms}
                    onChange={handleChange}
                  />
                  <label for="terms">I agree to the terms and conditions</label>
                </div>
              </div>
              <button
                className="ui bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white rounded"
                style={{ cursor: 'pointer', display: "block", margin: "10px auto 0px", backgroundColor: "#681472", color: "white", padding: "10px 25px" }}
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

export default Signup;
