create table if not exists election.rolepermission (
	`idRolePermission` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`isActive` tinyint(1) NOT NULL DEFAULT '1',
  	`role` int unsigned NOT NULL,
  	`permission` int unsigned NOT NULL,
  	FOREIGN KEY (`role`) REFERENCES `role` (`idRole`),
  	FOREIGN KEY (`permission`) REFERENCES `permission` (`idPermission`)
);