CREATE TABLE `suffrage` (
  `idSuffrage` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `user` int NOT NULL,
  `announcement` int NOT NULL,
  FOREIGN KEY (`user`) REFERENCES `user` (`IdUser`),
  FOREIGN KEY (`announcement`) REFERENCES `announcement` (`idAnnouncement`)
)