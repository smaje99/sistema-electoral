use election;

create procedure spInstitute_Insert (
    _nit varchar(25),
    _name varchar(150),
    _address varchar(50),
    _email varchar(50),
    _phone varchar(15)
)
begin
    insert
        into institute(nit, `name`, `address`, email, phone)
        values (_nit, _name, _address, _email, _phone);

    set @idInstitute := LAST_INSERT_ID();

    select @idInstitute as idInstitute;
end;