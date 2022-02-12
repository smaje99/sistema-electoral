CREATE TABLE `rolepermission` (
  `idRolePermission` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `role` int NOT NULL,
  `permission` int NOT NULL,
  FOREIGN KEY (`role`) REFERENCES `role` (`idRole`),
  FOREIGN KEY (`permission`) REFERENCES `permission` (`idPermission`)
)