# Tasks App
Welcome to Task App (AKA Athena)! This application is for IT touble ticketing with three distinct UI/UX based on one of three roles.

# Roles
#### User
- Create trouble tickets
- Upload an avatar
- View status of their tickets

#### Admin
- Create accounts
- Edit/delete accounts
- View all tickets

#### Tech
- View all tickets
- Claim, comment, and resolve tickets

# Getting Started
- Fork this repository.
- Clone the repository and install dependeniecs from the CLI:<br>
  (1) git clone (URL from FORK)<br>
  (2) cd client <br>
  (3) npm install or npm i <br>
  (4) cd .. <br>
  (5) cd server <br>
  (6) npm install or npm i <br>
  
# Create the Database and Tables and Seed Data
- Ensure you have latest PSQL version installed on your local machine running the command psql -V or psql --version.
- Run the following CLI commands:<br>
  (1) "createdb [insert DB name]"<br>
  (2) "psql -l" (verify that the database was created locally)<br>
  (3) "psql [DB name]" (access the database) <br>
 - Navigate to directory ./server/db to create the tables and seed the test data. <br>
** **
**Important!**
- Seed data already has a test user, admin, and tech account<br>
- The password must be at least five characters. To adjust the minimum characters, edit the schemaValid.js file located in ./client/src/Components/Login.
** **
- Run the command "psql [your DB name] -f testdb2.sql".
- Verify the tables from testdb2.sql were created by typing the following in the CLI:<br>
  (1) "psql [DB name]"<br>
  (2) "\d" (will list all tables in accessed database)<br>

# Running the Application
- This application requires two CLIs; one for the client and one for the server.
- In one CLI, navigate to the server directory then run the following script: npm start.
- In the second CLI, navigate to the client directory then run the following script: npm start.

# Signing In
- When the application is started, you will be prompted to sign in. Use one of these test accounts:<br>
  email: "admin@test.com" or "tech@test.com" or "user@test.com"<br>
  password: "password"  (They all have the same password)<br>

# Notes
This application is set up for the following that will require editing:
- Create a .env file (look at .env.template for environment variables)
- .env file needs to be set up prior to running application
- AWS S3 (see s3.js and .env.template if you want to config photo upload ability)

# Additional Resources for this Application
- Express: https://expressjs.com/en/api.html
- Axios: https://axios-http.com/docs/intro
- PSQL: https://www.postgresql.org/docs/current/index.html
- PG: https://node-postgres.com/apis/pool
- JWT: https://jwt.io/
- AWS S3: https://aws.amazon.com/s3/
