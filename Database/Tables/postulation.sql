CREATE TABLE `postulation` (
  `idPostulation` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `proposal` varchar(200),
  `electoralCode` varchar(10),
  `personalData` int NOT NULL,
  `announcementCharge` int NOT NULL,
  FOREIGN KEY (`personalData`) REFERENCES `personaldata` (`idPersonalData`),
  FOREIGN KEY (`announcementCharge`) REFERENCES `announcementcharge` (`idAnnouncementCharge`)
)