use election;

DELIMITER $$
create function fnCheckCrendentials(`_email` varchar(50), `_password` varchar(50))
	returns bool
	not deterministic
	reads sql data
begin
	return exists (
		select `idUser`
		from `user`
		where `email` = `_email` and `password` = `_password`
	);
end;
$$
DELIMITER ;