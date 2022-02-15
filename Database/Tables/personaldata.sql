create table if not exists election.personaldata (
	`idPersonalData` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`dni` varchar(25) NOT NULL UNIQUE,
  	`name` varchar(150) NOT NULL,
  	`gender` bool NOT NULL,
  	`phone` varchar(15) NOT NULL
);