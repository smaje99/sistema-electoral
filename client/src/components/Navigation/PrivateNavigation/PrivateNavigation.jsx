import { Link } from 'react-router-dom';

import Item from './Item';

import useAuth from '@Auth/useAuth';
import routes from '@Helpers/routes';

import './style.css';

const PrivateNavigation = () => {
    const {
        logout,
        hasPermission,
        user: { personalData: { name }, role, permissions }
    } = useAuth();

    return (
        <aside className="navigation">
            <section className="profile">
                <span className="profile--welcome">Bienvenido</span>
                <span className="profile--name">{name}</span>
                <span className="profile--role">{role.name}</span>
            </section>

            <section className="navigation__menu">
                <ul className="navigation__menu--list">
                    {permissions.map(({ menu, route }) => (
                        hasPermission(menu) && <Item {...{ menu, route }} />
                    ))}
                </ul>
            </section>

            <section className="navigation__logout">
                <Link
                    to={routes.home}
                    onClick={logout}
                    className="navigation__logout--button"
                >
                    Cerrar sesión
                </Link>
            </section>
        </aside>
    )
}

export default PrivateNavigation;