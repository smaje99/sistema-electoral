create table if not exists election.institutecharge (
    idInstituteCharge integer unsigned primary key not null auto_increment unique,
    isActive bool not null default true,
    institute integer unsigned not null,
    charge integer unsigned not null,
    foreign key (institute) references institute (idInstitute),
    foreign key (charge) references charge (idCharge)
);