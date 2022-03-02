use election;

drop procedure if exists spUserSession_Get;

create procedure spUserSession_Get(_email varchar(50))
begin
	select
		u.idUser,
		pd.idPersonalData,
		pd.`name`,
		u.isActive,
		i.idInstitute,
		i.`name` as institute,
		r.idRole,
		r.`name` as `role`
	from
		`user` as u
	inner join personaldata as pd
		on u.personalData = pd.idPersonalData
	inner join institute as i
		on u.institute = i.idInstitute
	inner join `role` as r
		on u.role = r.idRole
	where
		u.email = _email;
end;