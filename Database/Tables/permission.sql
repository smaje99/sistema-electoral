create table if not exists election.permission (
	`idPermission` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`menu` int unsigned NOT NULL,
  	`action` int unsigned NOT NULL,
  	FOREIGN KEY (`menu`) REFERENCES `menu` (`idMenu`),
  	FOREIGN KEY (`action`) REFERENCES `action` (`idAction`)
);