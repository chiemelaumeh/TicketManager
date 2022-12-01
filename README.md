# TasksApp
Welcome to task app, this application is a touble ticketing application.<br>
Within the application there are 3 account roles.
# Roles
User:<br>
- Create trouble tickets
- Upload an avatar
- View status of their tickets<br>
- <br>
Admin:<br>
- Create accounts
- Edit/delete accounts
- View all tickets<br>
- <br>
Tech:<br>
Can view all tickets within the organization assigned, claim, comment, and resolve trouble tickets
# Getting Started
- Fork and clone this repo
- Create a local directory to clone this repo in
- In your local directory terminal command line type: <br>
  (1) git clone (repo URL)<br>
  (2) cd ./client <br>
  (3) npm install <br>
  (4) cd .. <br>
  (5) cd ./server <br>
  (6) npm install <br>
# Database PostgreSQL Setup
- Ensure you have latest PSQL install on your local machine using the command psql -V or psql --version<br>
- Run the following terminal commands:<br>
  (1) "createdb [insert DB name]"<br>
  (2) "psql -l" (check if the database was created locally)<br>
  (3) "psql [DB name]" (access the database) <br>
- Navigate to directory ./server/db to migrate and create the tables and seed the test data<br>
- Run the command "psql [your DB name] -f testdb2.sql"
- Ensure the tables from testdb2.sql were created by typing in the terminal command line:<br>
  (1) "psql [databasename]"<br>
  (2) "\d" (will list all tables in accessed database)<br>
