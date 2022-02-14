import { NavLink, Link } from 'react-router-dom';

import useAuth from '@Auth/useAuth';
import items from '@Helpers/items';
import routes from '@Helpers/routes';

import './style.css';

const Item = ({ name, route }) => (
    <li className="navigation__menu--item">
        <NavLink
            className={({ isActive }) => (
                'navigation__menu--'.concat(isActive ? 'active' : 'link')
            )}
            to={route}
        >
            {name}
        </NavLink>
    </li>
)


const PrivateNavigation = () => {
    const {
        logout,
        user: { name, role, permissions }
    } = useAuth();

    return (
        <aside className="navigation">
            <section className="profile">
                <span className="profile--welcome">Bienvenido</span>
                <span className="profile--name">{name}</span>
                <span className="profile--role">{role}</span>
            </section>

            <section className="navigation__menu">
                <ul className="navigation__menu--list">
                    <Item {...items.info} />
                    {permissions.map(permission => (
                        <Item {...items[permission]} key={permission} />
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