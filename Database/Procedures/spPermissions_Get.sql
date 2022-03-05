use election;

drop procedure if exists spPermissions_Get;

create procedure spPermissions_Get(
    _idUser integer unsigned,
    _idInstituteRole integer unsigned
)
begin
    (
        select
            psrp.menu,
            psrp.`route`,
            psrp.`action`,
            rp.isActive
        from rolepermission as rp
            inner join (
                select
                    prp.idPermission,
                    mrp.item as menu,
                    mrp.`route`,
                    arp.`name` as `action`
                from permission as prp
                    inner join menu as mrp
                        on prp.menu = mrp.idMenu
                    inner join `action` as arp
                        on prp.`action` = arp.idAction
            ) as psrp
                on rp.permission = psrp.idPermission
        where rp.instituterole = _idInstituteRole
    ) union distinct (
        select
            psup.menu,
            psup.`route`,
            psup.`action`,
            up.isActive
        from userpermission as up
            inner join (
                select
                    pup.idPermission,
                    mup.item as menu,
                    mup.`route`,
                    aup.`name` as `action`
                from permission as pup
                    inner join menu as mup
                        on pup.menu = mup.idMenu
                    inner join `action` as aup
                        on pup.`action` = aup.idAction
            ) as psup
                on up.permission = psup.idPermission
        where up.`user` = _idUser
    );
end;