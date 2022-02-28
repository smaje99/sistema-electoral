use election;

create procedure spUser_Get(_email varchar(50))
begin
	select
		u.idUser,
		pd.idPersonalData,
		pd.`name`,
		u.isActive,
		i.idInstitute,
		i.`name` as institute,
		r.idRole,
		r.`name` as `role`,
		perm.menu,
		perm.`action`,
		perm.`route`,
		perm.isActive as isActivePermission
	from
		`user` as u
	inner join personaldata as pd
		on u.personalData = pd.idPersonalData
	inner join institute as i
		on u.institute = i.idInstitute
	inner join `role` as r
		on u.role = r.idRole
	inner join (
		(
			select
				rp.isActive,
				psrp.menu,
				psrp.`route`,
				psrp.`action`,
				rp.`role` as idfk
			from
				rolepermission as rp
			inner join (
				select
					prp.idPermission,
					mrp.item as menu,
					mrp.`route`,
					arp.`name` as `action`
				from
					permission as prp
				inner join menu as mrp
					on prp.menu = mrp.idMenu
				inner join `action` as arp
					on prp.`action` = arp.idAction
			) as psrp
				on rp.permission = psrp.idPermission
		) union distinct (
			select
				up.isActive,
				psup.menu,
				psup.`route`,
				psup.`action`,
				up.`user` as idfk
			from
				userpermission as up
			inner join (
				select
					pup.idPermission,
					mup.item as menu,
					mup.`route`,
					aup.`name` as `action`
				from
					permission as pup
				inner join menu as mup
					on pup.menu = mup.idMenu
				inner join `action` as aup
					on pup.`action` = aup.idAction
			) as psup
				on up.permission = psup.idPermission
		)
	) as perm
		on perm.idfk = u.`role` or perm.idfk = u.idUser
	where
		u.email = _email;
end;