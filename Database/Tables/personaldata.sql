CREATE TABLE `personaldata` (
  `idPersonalData` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `dni` varchar(25) NOT NULL UNIQUE,
  `Name` varchar(150) NOT NULL,
  `Gender` tinyint(1) NOT NULL,
  `Phone` varchar(15) NOT NULL
)