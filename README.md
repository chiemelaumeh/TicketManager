# TasksApp
Welcome to task app, this application is a touble ticketing application.<br>
Within the application there are 3 account roles.
# Roles
User:<br>
Can create trouble tickets, upload a personal image, and check for the status of the tickets created<br>
<br>
Admin:<br>
Can create accounts, manage accounts, and view all tickets<br>
<br>
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
  (1) "createdb [nameofdatabase]"<br>
  (2) "psql -l" (check if the database was created locally)<br>
  (3) "psql databasename" (access the database) <br>
- Navigate to directory server/db to migrate and create the tables and seed the test data<br>
- Once in directory open terminal command line and type in "psql databasename -f testdb2.sql"
- You can test of the tables and data are in the database by typing in the terminal command line:<br>
  (1) "psql databasename"<br>
  (2) "\d" (will list all tables in accessed database)<br>
