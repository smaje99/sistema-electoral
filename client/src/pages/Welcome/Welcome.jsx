import { Helmet } from 'react-helmet';

import useAuth from '@Auth/useAuth';

import './style.css';

const brand = 'Sistema Electoral Institucional';

const Welcome = () => {
    const { user: { institute } } = useAuth();

    return (
        <>
        <Helmet>
            <title>Dashboard | Sistema Electoral</title>
        </Helmet>

        <section className="welcome">
            <h1 className="welcome--brand">{brand}</h1>
            <h2 className="welcome--institute">{institute.name}</h2>
        </section>
        </>
    )
}

export default Welcome;