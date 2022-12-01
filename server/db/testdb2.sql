-- create local database migrate file into psql database 

DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS tickets CASCADE;
DROP TABLE IF EXISTS ticket_Comments CASCADE;
DROP TABLE IF EXISTS campus;

CREATE TABLE campus(
    campus_id SERIAL PRIMARY KEY NOT NULL,
    name TEXT,
    UNIQUE(name)
);

CREATE TABLE accounts(
    user_id SERIAL PRIMARY KEY NOT NULL,
    userName TEXT,
    accessRole TEXT,
    campus_name TEXT,
FOREIGN KEY(campus_name) REFERENCES campus(name),
    email TEXT,
    profilePic TEXT,
    password TEXT
);

CREATE TABLE tickets(
    ticket_id SERIAL PRIMARY KEY NOT NULL,
    user_id SERIAL,
FOREIGN KEY(user_id) REFERENCES accounts(user_id) ON DELETE CASCADE,
    category TEXT,
    descrip TEXT,
    assigned TEXT,
    priority TEXT,
    ETA TEXT,
    email TEXT,
    status TEXT,
campus_id SERIAL,
FOREIGN KEY(campus_id) REFERENCES campus(campus_id),
    create_date Date,
    resolved Date
);

CREATE TABLE ticket_Comments(
    comment_id SERIAL PRIMARY KEY NOT NULL,
    user_id SERIAL,
FOREIGN KEY(user_id) REFERENCES accounts(user_id) ON DELETE CASCADE,
  ticket_id SERIAL,
FOREIGN KEY(ticket_id) REFERENCES tickets(ticket_id) ON DELETE CASCADE,
    comment TEXT
);

INSERT INTO campus(name) VALUES('Austin');
INSERT INTO campus(name) VALUES('Dallas');
INSERT INTO campus(name) VALUES('Houston');
INSERT INTO campus(name) VALUES('San Antonio');

INSERT INTO accounts(userName,accessRole,campus_name,email,profilePic,password) VALUES('test','user','Austin','test1@test.com',null,'test');
INSERT INTO accounts(userName,accessRole,campus_name,email,profilePic,password) VALUES('test','tech','Dallas','test2@test.com',null,'test');

INSERT INTO tickets (user_id, category, descrip, assigned, priority, ETA, email, status, campus_id, create_date ,resolved) VALUES(1, 'hardware', 'doesnt work', 'someone','2','02/11/2023','test1@test.com','in progress', 1, '11/02/2022',null);
INSERT INTO tickets (user_id, category, descrip, assigned, priority, ETA, email, status, campus_id, create_date ,resolved) VALUES(1, 'hardware', 'doesnt work', 'someone','2','02/11/2023','tes1t@test.com','in progress', 1, '11/02/2022',null);
INSERT INTO tickets (user_id, category, descrip, assigned, priority, ETA, email, status, campus_id, create_date ,resolved) VALUES(2, 'hardware', 'doesnt work', 'someone','2','02/11/2023','test2@test.com','in progress', 2, '11/02/2022',null);
INSERT INTO tickets (user_id, category, descrip, assigned, priority, ETA, email, status, campus_id, create_date ,resolved) VALUES(1, 'hardware', 'doesnt work', 'someone','2','02/11/2023','test1@test.com','in progress', 1, '11/02/2022',null);


INSERT INTO ticket_Comments(user_id,ticket_id,comment) VALUES(1,1,'this is a ticket comment1');
INSERT INTO ticket_Comments(user_id,ticket_id,comment) VALUES(2,2,'this is a ticket comment1');
INSERT INTO ticket_Comments(user_id,ticket_id,comment) VALUES(1,1,'this is a ticket comment2');


-- query to get all accounts to filter upon login
-- select * from accounts;


-- ADMIN queries
    -- query to get all accounts to filter upon login
    -- select * from accounts;

    -- query to get one account
    -- select * from accounts where user_id = 1;

    -- query to create account
    -- INSERT INTO accounts(userName,acessRole,campus_id,email,profilePic,password) VALUES('test','user',1,'test123@test.com',null,'test');

    -- query to alter/update account info based on user id
    -- update accounts set username = 'updated1' where user_id = 1 returning *;

    -- query to delete account based on user id
    -- delete from accounts where user_id = 1;

-- Tech queries
    -- query get all tickets for campus
    -- SELECT * FROM tickets WHERE Campus_id = 2;


-- USER queries
    -- query get tickets based on user id; use upon successful login authentication
    -- select * from tickets where user_id = 1;

    -- query to insert new ticket
    -- INSERT INTO tickets (user_id, title, descrip, assigned, priority, ETA, email, status, campus_id, create_date ,resolved) VALUES(1, 'hardware', 'doesnt work', 'someone','2','02/11/2023','test@test.com','in progress', 1, '11/02/2022',null);

    -- query delete a ticket based on id
    -- delete from tickets where ticket_id = 1;

    -- query get all comments based on ticket id
    -- select * from ticket_Comments where ticket_id = 1;

