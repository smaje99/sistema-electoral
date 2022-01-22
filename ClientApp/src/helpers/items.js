import routes from "./routes";

const item = {
    info:         { name: 'Información Personal', route: routes.info },
    candidates:   { name: 'Candidatos',           route: routes.candidates },
    vote:         { name: 'Votaciones',           route: routes.vote },
    elections:    { name: 'Elecciones',           route: routes.elections },
    announcement: { name: 'Convocatoria',         route: routes.announcement}
}

export default item;