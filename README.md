Finance App
This repository contains a finance management application built with the MERN stack

  Project Structure
  <pre>
  finance-app/
  ├── client/
  │   ├── public/
  │   ├── src/
  │   │   ├── components/
  │   │   │   ├── DashboardBox.tsx
  │   │   │   ├── Header.tsx
  │   │   │   ├── Footer.tsx
  │   │   │   └── ...
  │   │   ├── state/
  │   │   │   └── api.ts
  │   │   ├── App.tsx
  │   │   ├── index.tsx
  │   │   └── ...
  │   ├── package.json
  │   └── ...
  ├── server/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── app.js
  │   ├── server.js
  │   ├── fly.toml
  │   └── ...
  ├── .gitignore
  ├── README.md
  └── ...
  </pre>

Client
The client side is built with React and contains the following main directories and files:

public/: Static assets like index.html, images, etc.
src/: Source code for the React application.
components/: Contains React components such as DashboardBox.tsx, Header.tsx, and Footer.tsx.
state/: Manages the state and API calls, including api.ts.
App.tsx: The main App component.
index.tsx: Entry point of the React application.
Server
The server side is built with Node.js and Express and includes:

controllers/: Contains controller files handling the logic for different routes.
models/: Defines the data models.
routes/: Contains the route definitions.
app.js: Initializes the Express app.
server.js: Starts the server.
fly.toml: Configuration file for deploying the app on Fly.io.
How to Build and Run the Project
Prerequisites
Node.js (v14 or higher)
npm or yarn
MongoDB (for the database)
Setup
Clone the repository:

  <pre>
  git clone https://github.com/JonnyGree/financeDashboard
  cd finance-app
  </pre>

Install dependencies:

  <pre>
  # Install server dependencies
  cd server
  npm install
  # Install client dependencies
  cd ../client
  npm install
  </pre>

Set up environment variables:
Create a .env file in the server directory and add your MongoDB connection string and other necessary environment variables.

Run the server:

  <pre>
  cd server
  npm start
  </pre>

Run the client:

  <pre>
  cd ../client
  npm start
  </pre>

Access the application:
Open your browser and go to http://localhost:3000 to see the application running.

Deployment
The project can be deployed using Fly.io. Make sure to configure fly.toml file correctly for deployment.

Contributions
Feel free to submit issues or pull requests. Contributions are welcome!

License
This project is licensed under the MIT License.

