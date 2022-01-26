import { NavLink } from 'react-router-dom';

import routes from '@Helpers/routes';

import './style.css';

const PublicNavigation = () => {

    return (
        <nav className="navbar">
            <NavLink to={routes.home} className="navbar__brand">
                Sistema Electoral
            </NavLink>
            <NavLink to={routes.login} className="navbar__login">
                Iniciar sesión
            </NavLink>
        </nav>
    )
}

export default PublicNavigation;