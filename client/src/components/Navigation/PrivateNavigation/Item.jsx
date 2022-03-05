import { NavLink } from 'react-router-dom';

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

export default Item;