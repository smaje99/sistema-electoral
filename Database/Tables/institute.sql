CREATE TABLE `institute` (
  `idInstitute` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `nit` varchar(25) NOT NULL UNIQUE,
  `name` varchar(150) NOT NULL,
  `address` varchar(50),
  `email` varchar(50) NOT NULL,
  `phone` varchar(15)
)