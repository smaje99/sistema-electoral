create table if not exists election.announcementcharge (
	idAnnouncementCharge integer unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  	announcement integer unsigned NOT NULL,
  	institutecharge integer unsigned NOT NULL,
  	FOREIGN KEY (announcement) REFERENCES announcement (idAnnouncement),
  	FOREIGN KEY (institutecharge) REFERENCES institutecharge (idInstituteCharge)
);