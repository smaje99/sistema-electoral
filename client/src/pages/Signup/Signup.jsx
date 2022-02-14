import { Helmet } from 'react-helmet';
import { Navigate, Routes, Route } from 'react-router-dom';

import { Wizard, WizardProvider } from '@Components/Wizard';

import InstituteSignup from './components/InstituteSignup';
import PersonalSignup from './components/PersonalSignup';

import routes from '@Helpers/routes';

const items = [ 'Personal', 'Institucional' ];

const Signup = () => {
    return (
        <>
        <Helmet>
            <title>Crear cuenta</title>
        </Helmet>

        <WizardProvider items={items}>
            <h1>Crear cuenta</h1>
            <Wizard />
            <Routes>
                <Route path="/" element={<Navigate to={routes.signup.personal} />} />
                <Route path="personal" element={<PersonalSignup />} />
                <Route path="institute" element={<InstituteSignup />} />
            </Routes>
        </WizardProvider>
        </>
    )
}

export default Signup;