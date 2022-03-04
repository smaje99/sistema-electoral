create table if not exists election.instituterole (
    idInstituteRole integer unsigned primary key not null auto_increment unique,
    institute integer unsigned not null,
    `role` integer unsigned not null,
    foreign key (institute) references institute (idInstitute),
    foreign key (`role`) references `role` (idRole)
);