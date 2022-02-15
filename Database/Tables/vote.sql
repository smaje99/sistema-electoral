create table if not exists election.vote (
	`idVote` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`postulation` int unsigned NOT NULL,
  	FOREIGN KEY (`postulation`) REFERENCES `postulation` (`idPostulation`)
);