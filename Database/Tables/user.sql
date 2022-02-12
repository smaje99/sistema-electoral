CREATE TABLE `user` (
  `IdUser` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `Email` varchar(50) NOT NULL UNIQUE,
  `Password` varchar(50) NOT NULL,
  `Active` tinyint(1) NOT NULL DEFAULT '1',
  `PersonalData` int NOT NULL,
  `Institute` int NOT NULL,
  `Role` int NOT NULL,
  FOREIGN KEY (`PersonalData`) REFERENCES `personaldata` (`idPersonalData`),
  FOREIGN KEY (`Institute`) REFERENCES `institute` (`idInstitute`),
  FOREIGN KEY (`Role`) REFERENCES `role` (`idRole`)
)