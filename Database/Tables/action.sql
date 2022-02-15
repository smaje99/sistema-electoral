create table if not exists election.action (
	`idAction` integer unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`name` varchar(25) NOT NULL UNIQUE
);