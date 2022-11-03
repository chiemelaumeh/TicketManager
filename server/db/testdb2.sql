-- create local database migrate file into psql database 

DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS tickets CASCADE;
DROP TABLE IF EXISTS ticket_Comments CASCADE;
DROP TABLE IF EXISTS campus;

CREATE TABLE campus(
    campus_id SERIAL PRIMARY KEY NOT NULL,
    name TEXT
);

CREATE TABLE accounts(
    user_id SERIAL PRIMARY KEY NOT NULL,
    userName TEXT,
    acessRole TEXT,
    campus_id SERIAL,
FOREIGN KEY(campus_id) REFERENCES campus(campus_id),
    email TEXT,
    profilePic TEXT,
    password TEXT
);

CREATE TABLE tickets(
    ticket_id SERIAL PRIMARY KEY NOT NULL,
    user_id SERIAL,
FOREIGN KEY(user_id) REFERENCES accounts(user_id),
    title TEXT,
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
    TComment_id SERIAL PRIMARY KEY NOT NULL,
    user_id SERIAL,
FOREIGN KEY(user_id) REFERENCES accounts(user_id),
  ticket_id SERIAL,
FOREIGN KEY(ticket_id) REFERENCES tickets(ticket_id) ON DELETE CASCADE,
    comment TEXT
);

INSERT INTO campus(name) VALUES('Austin');
INSERT INTO campus(name) VALUES('Dallas');

INSERT INTO accounts(userName,acessRole,campus_id,email,profilePic,password) VALUES('test','user',1,'test123@test.com',null,'test');
INSERT INTO accounts(userName,acessRole,campus_id,email,profilePic,password) VALUES('test','tech',2,'test123@test.com',null,'test');

INSERT INTO tickets (user_id, title, descrip, assigned, priority, ETA, email, status, campus_id, create_date ,resolved) VALUES(1, 'hardware', 'doesnt work', 'someone','2','02/11/2023','test@test.com','in progress', 1, '11/02/2022',null);
INSERT INTO tickets (user_id, title, descrip, assigned, priority, ETA, email, status, campus_id, create_date ,resolved) VALUES(1, 'hardware', 'doesnt work', 'someone','2','02/11/2023','test@test.com','in progress', 2, '11/02/2022',null);

INSERT INTO ticket_Comments(user_id,ticket_id,comment) VALUES(1,1,'this is a ticket comment');


--query get all tickets for campus
-- SELECT * FROM tickets WHERE Campus_id = 2;

--query delete a ticket
-- delete from tickets where ticket_id = 1;
