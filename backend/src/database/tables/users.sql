

-- USE Project_DB;


CREATE TABLE Users (
	user_id varchar(200) NOT NULL PRIMARY KEY,
	first_name varchar(100) NOT NULL,
    last_name varchar(200) Not NULL,
	email varchar(130) NOT NULL,
	password varchar(250) NOT NULL,
	role varchar(200) NOT NULL,
	
)


-- DROP TABLE Users;