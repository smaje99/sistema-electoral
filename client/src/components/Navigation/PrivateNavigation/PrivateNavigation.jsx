import { NavLink, Link } from 'react-router-dom';

import useAuth from '@Auth/useAuth';
import routes from '@Helpers/routes';

import './style.css';

const Item = ({ menu, route }) => (
    <li className="navigation__menu--item">
        <NavLink
            className={({ isActive }) => (
                'navigation__menu--'.concat(isActive ? 'active' : 'link')
            )}
            to={route}
        >
            {menu}
        </NavLink>
    </li>
)


const PrivateNavigation = () => {
    const {
        logout,
        user: { personalData: { name }, role, permissions }
    } = useAuth();

    const isView = (actions) => {
        const view = actions.find(({ action }) => action === 'view');
        return !!(view?.isActive);
    }

    return (
        <aside className="navigation">
            <section className="profile">
                <span className="profile--welcome">Bienvenido</span>
                <span className="profile--name">{name}</span>
                <span className="profile--role">{role.name}</span>
            </section>

            <section className="navigation__menu">
                <ul className="navigation__menu--list">
                    {permissions.map(({ menu, route, actions }) => (
                        isView(actions) && <Item {...{ menu, route }} />
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