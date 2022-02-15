create table if not exists election.userpermission (
	`idUserPermission` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`isActive` bool NOT NULL DEFAULT true,
  	`user` int unsigned NOT NULL,
  	`permission` int unsigned NOT NULL,
  	FOREIGN KEY (`user`) REFERENCES `user` (`idUser`),
  	FOREIGN KEY (`permission`) REFERENCES `permission` (`idPermission`)
);