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