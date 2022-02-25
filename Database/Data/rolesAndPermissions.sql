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