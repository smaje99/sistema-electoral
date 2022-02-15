create table if not exists election.postulation (
	`idPostulation` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`isActive` bool NOT NULL DEFAULT true,
  	`proposal` varchar(200),
  	`electoralCode` varchar(10),
	`personalData` int unsigned NOT NULL,
  	`announcementCharge` int unsigned NOT NULL,
  	FOREIGN KEY (`personalData`) REFERENCES `personaldata` (`idPersonalData`),
  	FOREIGN KEY (`announcementCharge`) REFERENCES `announcementcharge` (`idAnnouncementCharge`)
);