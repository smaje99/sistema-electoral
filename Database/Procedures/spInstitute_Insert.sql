use election;

create procedure spInstitute_Insert (
    _nit varchar(25),
    _name varchar(150),
    _address varchar(50),
    _email varchar(50),
    _phone varchar(15)
)
begin
    -- create a institute
    insert
        into institute(nit, `name`, `address`, email, phone)
        values (_nit, _name, _address, _email, _phone);

    set @idInstitute := LAST_INSERT_ID();

    -- create the admin role for the institute
    insert
        into instituterole(institute, `role`)
        values (@idInstitute, 1);

    select @idInstitute as idInstitute;
end;