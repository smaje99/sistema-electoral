CREATE TABLE `userpermission` (
  `idUserPermission` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `user` int NOT NULL,
  `permission` int NOT NULL,
  FOREIGN KEY (`user`) REFERENCES `user` (`idUser`),
  FOREIGN KEY (`permission`) REFERENCES `permission` (`idPermission`)
)