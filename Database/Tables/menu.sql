CREATE TABLE `menu` (
  `idMenu` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `item` varchar(25) NOT NULL UNIQUE,
  `route` varchar(150) NOT NULL
)