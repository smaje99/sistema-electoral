CREATE FUNCTION `election`.`fnCheckCredentials`(
    _email varchar(50),
    _password varchar(50)
) RETURNS tinyint(1)
    READS SQL DATA
BEGIN
    return exists(
        select idUser
        from user
        where email = _email and password = _password
    );
END