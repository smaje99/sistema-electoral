import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import routes from '@Helpers/routes';

import './styles.css';

const Home = () => (
    <>
    <Helmet>
        <title>Inicio | Sistema Electoral</title>
    </Helmet>

    <main className='register'>
        <span className="register__title">
            ¿Deseas tener un sistema electoral para su institución educativa?
        </span>
        <Link to={routes.signup} className="register__button">
            CREAR CUENTA
        </Link>
    </main>
    </>
)

export default Home;