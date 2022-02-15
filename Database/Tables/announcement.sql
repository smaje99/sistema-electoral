create table if not exists election.announcement (
	`idAnnouncement` int unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	`record` varchar(15) NOT NULL UNIQUE,
  	`isElectoralReport` tinyint(1) NOT NULL DEFAULT '0',
  	`isCandidateReport` tinyint(1) NOT NULL DEFAULT '0',
  	`announcementStart` date NOT NULL,
  	`announcementEnd` date NOT NULL,
  	`nominationStart` date NOT NULL,
  	`nominationEnd` date NOT NULL,
  	`electoralStart` datetime NOT NULL,
  	`electoralEnd` datetime NOT NULL,
  	`institute` int unsigned NOT NULL,
  	FOREIGN KEY (`institute`) REFERENCES `institute` (`IdInstitute`)
);