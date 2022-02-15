create table if not exists election.institute (
    `idInstitute` int UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
    `nit` VARCHAR(25) NOT NULL UNIQUE,
    `name` VARCHAR(150) NOT NULL,
    `address` VARCHAR(50),
    `email` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(15)
);