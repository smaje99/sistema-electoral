CREATE PROCEDURE election.spUserSession_Login(
	_email varchar(50),
    _password varchar(50)
)
BEGIN
	SET @isAuth := (SELECT election.fnCheckPassword(_email, _password));

	IF @isAuth = 1 THEN
		CALL spUser_Get(_email);
	ELSE
		SELECT @isAuth as isAuth;
	END IF;
END