create table if not exists election.`user` (
	`idUser` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
 	`email` varchar(50) NOT NULL UNIQUE,
 	`password` varchar(50) NOT NULL,
 	`isActive` bool NOT NULL DEFAULT true,
 	`personalData` int unsigned NOT NULL,
 	`institute` int unsigned NOT NULL,
 	`instituterole` int unsigned NOT NULL,
 	FOREIGN KEY (`personalData`) REFERENCES `personaldata` (`idPersonalData`),
 	FOREIGN KEY (`institute`) REFERENCES `institute` (`idInstitute`),
 	FOREIGN KEY (`instituterole`) REFERENCES `instituterole` (`idInstituteRole`)
);