use election;

create procedure spAdmin_Insert(
    _emailUser varchar(50),
    `_password` varchar(50),
    _dni varchar(25),
    _nameUser varchar(150),
    _gender bool,
    _phoneUser varchar(15),
    _nit varchar(25),
    _nameInstitute varchar(150),
    _address varchar(50),
    _emailInstitute varchar(50),
    _phoneInstitute varchar(15)
)
begin
    -- insert into to institute
    insert
        into institute(nit, `name`, `address`, email, phone)
        values (_nit, _nameInstitute, _address, _emailInstitute, _phoneInstitute);

    set @idInstitute := LAST_INSERT_ID();

    -- insert into to personal data
    insert
        into personaldata(dni, `name`, gender, phone)
        values (_dni, _nameUser, _gender, _phoneUser);

    set @idPersonalData := LAST_INSERT_ID();

    -- insert into to user
    insert
        into `user`(email, `password`, personaldata, institute, `role`)
        values (_emailUser, `_password`, @idPersonalData, @idInstitute, 1);

    -- returns the user's session information
    call spUserSession_Login(_email, `_password`);
end;