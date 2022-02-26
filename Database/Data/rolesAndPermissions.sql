use election;

insert into `action` (`name`)
    values
        ("view"),  -- 1
        ("create"),  -- 2
        ("edit"),  -- 3
        ("vote");  -- 4

insert into menu (item, `route`)
    values
        ("Información Personal", "/dashboard/info"),  -- 1
        ("Usuarios", "/dashboard/users"),  -- 2
        ("Candidatos", "/dashboard/candidates"),  -- 3
        ("Votaciones", "/dashboard/vote"),  -- 4
        ("Elecciones", "/dashboard/elections"),  -- 5
        ("Convocatorias", "/dashboard/announcement"),  -- 6
        ("Roles, Cargos y Permisos", "/dashboard/roles");  -- 7

insert into permission (menu, `action`)
    values
        (1, 1),  -- 1
        (1, 3),  -- 2
        (2, 1),  -- 3
        (2, 2),  -- 4
        (2, 3),  -- 5
        (3, 1),  -- 6
        (3, 2),  -- 7
        (3, 3),  -- 8
        (4, 1),  -- 9
        (4, 4),  -- 10
        (5, 1),  -- 11
        (6, 1),  -- 12
        (6, 2),  -- 13
        (6, 3),  -- 14
        (7, 1),  -- 15
        (7, 2),  -- 16
        (7, 3);  -- 17

insert into `role` (`name`)
    values
        ("Administrador"),  -- 1
        ("Administrativo"),  -- 2
        ("Comite Electoral"),  -- 3
        ("Docente"),  -- 4
        ("Estudiante");  -- 5

insert into rolepermission (`role`, permission)
    values
        (1, 1),  -- 1
        (1, 2),  -- 2
        (1, 3),  -- 3
        (1, 4),  -- 4
        (1, 5),  -- 5
        (1, 11),  -- 6
        (1, 12),  -- 7
        (1, 15),  -- 8
        (1, 16),  -- 9
        (1, 17),  -- 10
        (2, 1),  -- 11
        (2, 2),  -- 12
        (2, 3),  -- 13
        (2, 4),  -- 14
        (2, 5),  -- 15
        (2, 11),  -- 16
        (2, 12),  -- 17
        (3, 1),  -- 18
        (3, 2),  -- 19
        (3, 3),  -- 20
        (3, 6),  -- 21
        (3, 11),  -- 22
        (3, 12),  -- 23
        (3, 13),  -- 24
        (3, 14),  -- 25
        (4, 1),  -- 26
        (4, 2),  -- 27
        (4, 11),  -- 28
        (5, 1),  -- 29
        (5, 2),  -- 30
        (5, 6),  -- 31
        (5, 7),  -- 32
        (5, 8),  -- 33
        (5, 9),  -- 34
        (5, 10);  -- 35