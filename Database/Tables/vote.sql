CREATE TABLE `vote` (
  `idVote` int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `postulation` int NOT NULL,
  FOREIGN KEY (`postulation`) REFERENCES `postulation` (`idPostulation`)
)