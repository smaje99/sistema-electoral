create table if not exists election.announcementcharge (
	`idAnnouncementCharge` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`announcement` int unsigned NOT NULL,
  	`charge` int unsigned NOT NULL,
  	FOREIGN KEY (`announcement`) REFERENCES `announcement` (`idAnnouncement`),
  	FOREIGN KEY (`charge`) REFERENCES `charge` (`IdCharge`)
);