use defaultdb;

drop table if exists selfish_routing_articles;

create table selfish_routing_articles (
	id INT NOT NULL AUTO_INCREMENT,
    article_key CHAR(8) NOT NULL,
	pub_year INT,
    author VARCHAR(30) NOT NULL,
    title VARCHAR(200) NOT NULL,
    publication VARCHAR(30) NOT NULL,
    url VARCHAR(300) NOT NULL,
    lat INT NOT NULL,
    lng INT NOT NULL,
    PRIMARY KEY (id)
);