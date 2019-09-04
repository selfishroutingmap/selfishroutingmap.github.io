use defaultdb;

drop table if exists form_results;

create table form_results (
	id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(40) NOT NULL,
    lastname VARCHAR(40) NOT NULL, 
    email VARCHAR(200) NOT NULL,
    problem INT NOT NULL,
    article VARCHAR(200) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    comments TEXT NOT NULL,
    PRIMARY KEY (id)
);

