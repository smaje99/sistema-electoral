create table if not exists election.charge (
	`idCharge` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`name` varchar(25) NOT NULL UNIQUE
);