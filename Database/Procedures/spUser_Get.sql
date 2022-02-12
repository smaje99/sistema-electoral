CREATE PROCEDURE `election`.`spUser_Get`(
    _email varchar(50)
)
BEGIN
    select
		u.idUser,
		pd.idPersonalData,
		pd.name as namePersonalData,
		u.isActive,
		i.idInstitute,
		i.name as nameInstitute,
		r.idRole,
		r.name as nameRole
	from user as u
		inner join personaldata as pd
			on u.personalData = pd.idPersonalData
		inner join institute as i
			on u.institute = i.idInstitute
		inner join role as r
			on u.role = r.idRole
	where u.email  = _email;
END