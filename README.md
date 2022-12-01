# TasksApp
Welcome to Task App (AKA Athena)! This application is for IT touble ticketing with three distinct UI/UX based on one of three roles.

# Roles
User
- Create trouble tickets
- Upload an avatar
- View status of their tickets

Admin
- Create accounts
- Edit/delete accounts
- View all tickets

Tech
- View all tickets
- Claim, comment, and resolve tickets

# Getting Started
- Fork this repository
- Clone the repository and install dependeniecs from the CLI:
  (1)clone https://github.com/Blue-Digital/TasksApp.git
  (2) cd client
  (3) npm install or npm i
  (4) cd .. 
  (5) cd server 
  (6) npm install or npm i
  
# Create the Database and Tables and Seed Data
- Ensure you have latest PSQL version installed on your local machine using the command psql -V or psql --version
- Run the following CLI commands:<br>
  (1) "createdb [insert DB name]"<br>
  (2) "psql -l" (verify that the database was created locally)<br>
  (3) "psql [DB name]" (access the database) <br>
 - Navigate to directory ./server/db to migrate and create the tables and seed the test data<br>
 
**Important! You need to create seed data in the testdb.sql file for the accounts table before migration. At least one for user, one for admin, and one for tech.**

- Run the command "psql [your DB name] -f testdb2.sql" 
- Verify the tables from testdb2.sql were created by typing the following in the CLI:<br>
  (1) "psql [DB name]"<br>
  (2) "\d" (will list all tables in accessed database)<br>

# Running the Application
- This application requires two CLIs; one for the client and one for the server.
- In one CLI, navigate to the server directory then run the following script: npm start
- In the second CLI, navigate to the client directory then run the following script: npm start

# Signing In
- When the application is started, you will be prompted to sign in. Sign in using one of the accounts that you seeded the datatable with.

# Notes about this application

