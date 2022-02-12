CREATE TABLE `permission` (
  `idPermission` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `menu` int NOT NULL,
  `action` int NOT NULL,
  FOREIGN KEY (`menu`) REFERENCES `menu` (`idMenu`),
  FOREIGN KEY (`action`) REFERENCES `action` (`idAction`)
)