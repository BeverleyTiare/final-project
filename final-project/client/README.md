# Epigenetics and Sleep MERN Stack Project

This user-focused MERN (MongoDB, Express.js, React.js, Node.js) Stack project is single-page application that works with real-world data to solve a real-world challenge: attaining quality sleep - with a focus on data and user demand. The application is designed to explore the relationship between epigenetics and sleep quality, and allows users to track their sleep data, store their information, and also to access an open API to provide additional sleep-related information.

## Features

- User registration and authentication
- Sleep data tracking and storage
- Integration with an open API for sleep-related information((??))
- User-friendly UI for viewing and managing sleep data
- Data visualization for sleep patterns and trends ((??))
- Use of queries and mutations for retrieving, adding, updating, and deleting data.
- Authentication: JSON Web Tokens (JWT).
- Protecting sensitive API key information on the server.

## Technologies Used

 *Application Architecture and processes
 1. User Interaction: 
 The client-side (front-end) of the application, built with React.js, enables users to interact with the app's user interface (UI). This includes features like input forms, buttons, and other UI elements.When users interact with the UI, events are triggered (e.g., button click, form submission).These events are handled by event handlers or React component methods, which perform client-side validation, data manipulation, or trigger API requests to the server.
 
 2. Data handling and storage:
 Data handling involves managing and processing data within the application.  On the client-side, React components maintain local state using the `useState` hook or state management libraries. This allows for efficient handling of UI-related data without extensive processes to the server. For persistent data storage, the server-side (back-end) of the application, built with Node.js and Express.js, interacts with a database (e.g., MongoDB) to store and retrieve data.The server handles API requests from the client and performs necessary operations (e.g., reading, creating, updating, deleting) on the data stored in the database. The server-side code uses database libraries or Object-Document Mapping (ODM) libraries (e.g., Mongoose for MongoDB) to interact with the database, query data, and perform CRUD operations.
 
 3. Authentication
 Authentication ensures that users are securely identified and granted access to specific features or data within the application. User authentication is  implemented using techniques like username/password-based authentication via token-based authentication (e.g., JWT). When a user registers or logs in, the server verifies the provided credentials, generates a session token or JWT, and sends it back to the client.
The client then includes this token in subsequent requests to authenticate and authorize access to protected routes or resources. Encryption is used to securely store sensitive user data, such as passwords, in the database: encryption techniques include hashing with salt (e.g., bcrypt) and storing only the hashed values in the database, making it computationally difficult to reverse-engineer original data

4. Routing Functions:
    Routing in a MERN stack application refers to the mechanism of mapping HTTP requests to appropriate server-side functions or handlers.On the server-side, Express.js provides a flexible routing system: to  specify the HTTP methods (GET, POST, etc.), and associate them with corresponding functions or middleware.The server-side routes handle incoming API requests, perform necessary operations (e.g., data validation, calling database functions), and send appropriate responses back to the client. Routing functions include authentication middleware to check user authorization before processing the request. On the client-side, React Router (a popular routing library for React) enables declarative routing within the application, allowing for navigation between different views or components based on the current URL.

These components collectively work together within the application architecture to enable user interaction, handle data, store and retrieve data securely, implement authentication and encryption, and define the routing of requests and responses between the client and server.
 
[MERN Stack architecture example](https://www.quora.com/How-does-MEAN-stack-architecture-work)

*Technologies used:
- MongoDB and Mongoose : for user's database storage including sleep data.
- Express.js: A backend framework used to build the API endpoints and handle data retrieval and storage.
- React.js: A JavaScript library used to build the user interface and components.
- Node.js: A JavaScript runtime used for the server-side logic and API implementation.
- Apollo Client: A GraphQL client used for making API requests and managing data in the frontend.
- Open API: Integration with an open API for retrieving additional sleep-related information.
- Heroku deployment 

## Installation (??)

1. Clone the repository: `git clone https://github.com/your-username/epigenetics-sleep-project.git`
2. Navigate to the project directory: `cd epigenetics-sleep-project`
3. Install the server dependencies: `npm install`
4. Install the client dependencies: `cd client && npm install`
5. Return to the project root: `cd ..`
6. Start the development server: `npm run dev` 

Make sure you have MongoDB installed and running on your local machine or provide the appropriate MongoDB connection URL.

## Configuration

- Server Configuration: Set up your MongoDB connection URL and other server configuration variables in the `.env` file located in the root directory.

## API Integration (??)

This project integrates with an open API for retrieving sleep-related information. To configure the API integration:

1. Obtain an API key from the sleep API provider.
2. Set the API key in the appropriate environment variable in the `.env` file.
3. Modify the API integration code in the project to make the necessary API requests and handle the responses.

## Links : TODO
-   The URL of the deployed application:
    
-   The URL of the GitHub repository: 

## License:
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgements:
Bootcamp TAs, tutors, opensource code sites, W3 schools, MDN, stackoverflow, medium, full stack blog.



## Contact

For any inquiries or questions, please contact : 







*********************************************************************************************************************************
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
