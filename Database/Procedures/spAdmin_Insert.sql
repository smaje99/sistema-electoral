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
    insert
        into institute(nit, `name`, `address`, email, phone)
        values (_nit, _nameInstitute, _address, _emailInstitute, _phoneInstitute);

    insert
        into personaldata(dni, `name`, gender, phone)
        values (_dni, _nameUser, _gender, _phoneUser);

    set @idInstitute := (select idInstitute from institute where nit = _nit);
    set @idPersonalData := (
        select idPersonalData from personaldata where dni = _dni
    );

    insert
        into `user`(email, `password`, personaldata, institute, `role`)
        values (_emailUser, `_password`, @idPersonalData, @idInstitute, 1);
end;