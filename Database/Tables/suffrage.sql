create table if not exists election.suffrage (
	`idSuffrage` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`user` int unsigned NOT NULL,
	`announcement` int unsigned NOT NULL,
  	FOREIGN KEY (`user`) REFERENCES `user` (`idUser`),
  	FOREIGN KEY (`announcement`) REFERENCES `announcement` (`idAnnouncement`)
);