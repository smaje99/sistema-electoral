import { NavLink } from 'react-router-dom';

import useAuth from '@Auth/useAuth';
import items from '@Helpers/items';

const Item = ({ name, route }) => (
    <li className="navigation__menu--item">
        <NavLink className="navigation__menu--link" to={route}>
            {name}
        </NavLink>
    </li>
)


const Navigation = () => {
    const { user: { name, role, permissions } } = useAuth();

    return (
        <aside className="navigation">
            <section className="profile">
                <span className="profile--welcome">Bienvenido</span>
                <span className="profile--name">{name}</span>
                <span className="profile--role">{role}</span>
            </section>

            <section className="navigation__menu">
                <ul className="navigation__menu--list">
                    <Item {...items('info')} />
                    {permissions.map(permission => (
                        <Item key={permission} {...items[permission]} />
                    ))}
                </ul>
            </section>

            <section className="navigation__logout">
                <button className="navigation__logout--button">
                    Cerrar sesión
                </button>
            </section>
        </aside>
    )
}

export default Navigation;