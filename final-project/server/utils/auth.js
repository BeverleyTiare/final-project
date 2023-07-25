
// Functionality for the auth middleware
const jwt = require('jsonwebtoken');

// Set token secret and expiration date
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

//function that will be used to authenticate the user by verifying the token
module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();//split and trim the token
    }

    if (!token) {
      return req;
    }
//"try" function to verify the token
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  //function to sign the token: 
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};


