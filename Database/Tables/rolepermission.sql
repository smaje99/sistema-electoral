create table if not exists election.rolepermission (
	`idRolePermission` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`isActive` tinyint(1) NOT NULL DEFAULT '1',
  	instituterole int unsigned NOT NULL,
  	`permission` int unsigned NOT NULL,
  	FOREIGN KEY (instituterole) REFERENCES instituterole (idInstituteRole),
  	FOREIGN KEY (`permission`) REFERENCES `permission` (`idPermission`)
);