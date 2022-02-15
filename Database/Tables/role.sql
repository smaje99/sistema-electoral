create table if not exists election.`role` (
	`idRole` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`name` varchar(25) NOT NULL
);