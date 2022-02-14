import routes from "./routes";

const item = {
    info:         { name: 'Información Personal', route: routes.dashboard.info },
    candidates:   { name: 'Candidatos',           route: routes.dashboard.candidates },
    vote:         { name: 'Votaciones',           route: routes.dashboard.vote },
    elections:    { name: 'Elecciones',           route: routes.dashboard.elections },
    announcement: { name: 'Convocatoria',         route: routes.dashboard.announcement}
}

export default item;