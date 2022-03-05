use election;

drop procedure if exists spAdmin_Insert;

create procedure spAdmin_Insert(
    _email varchar(50),
    `_password` varchar(50),
    _dni varchar(25),
    _name varchar(150),
    _gender bool,
    _phone varchar(15),
    _idInstitute integer unsigned
)
begin
    -- insert into to personal data
    insert
        into personaldata(dni, `name`, gender, phone)
        values (_dni, _name, _gender, _phone);

    set @idPersonalData := LAST_INSERT_ID();

    -- Get institute role id
    set @idInstituteRole := (
        select
            idInstituteRole
        from
            instituterole
        where
            institute = _idInstitute
            and `role` = 1
    );

    -- insert into to user
    insert
        into `user`(email, `password`, personaldata, institute, instituterole)
        values (_email, `_password`, @idPersonalData, _idInstitute, @idInstituteRole);

    -- returns the user's session information
    call spUserSession_Login(_email, `_password`);
end;