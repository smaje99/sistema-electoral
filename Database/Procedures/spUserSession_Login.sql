use election;

create procedure spUserSession_Login(
	_email varchar(50),
	_password varchar(50)
)
begin
	set @isAuth := (select fnCheckCrendentials(_email, _password));

	if @isAuth = 1 then
		call spUser_Get(_email);
	else
		select @isAuth as isAuth;
	end if;
end;