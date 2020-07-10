-- CREATE TABLE 


CREATE TABLE account1(
user_id serial PRIMARY KEY,
username VARCHAR (50) UNIQUE NOT NULL,
password VARCHAR (50) NOT NULL,
email VARCHAR (355) UNIQUE NOT NULL,
created_on TIMESTAMP NOT NULL,
last_login TIMESTAMP
);

-- DROP TABLE COMMAND

Drop TABLE account1;


--INSERT INTO TABLE COMMAND

insert into account1 values(1,'sai','fjf','abc@df','1975-01-01');


--SEARCH FROM TABLE

select * from account1;

-- UPDATE TABLE DATA

update account1 set email='ab' where user_id=1;


-- DELETE TABLE DATA
DELETE from account1 where user_id=1;