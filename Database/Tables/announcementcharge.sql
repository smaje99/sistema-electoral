CREATE TABLE `announcementcharge` (
  `idAnnouncementCharge` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `announcement` int NOT NULL,
  `charge` int NOT NULL,
  FOREIGN KEY (`announcement`) REFERENCES `announcement` (`idAnnouncement`),
  FOREIGN KEY (`charge`) REFERENCES `charge` (`IdCharge`)
)