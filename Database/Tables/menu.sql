create table if not exists election.menu (
	`idMenu` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
	`item` varchar(25) NOT NULL UNIQUE,
	`route` varchar(150) NOT NULL
);