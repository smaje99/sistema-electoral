import { Helmet } from 'react-helmet';
import { Navigate, Routes, Route } from 'react-router-dom';

import { Wizard, WizardProvider } from '@Components/Wizard';

import InstituteSignup from './components/InstituteSignup';
import PersonalSignup from './components/PersonalSignup';

import routes from '@Helpers/routes';

import './style.css';

const items = [ 'Personal', 'Institucional' ];

const Signup = () => {
    return (
        <>
        <Helmet>
            <title>Crear cuenta</title>
        </Helmet>

        <WizardProvider items={items}>
            <h1 className="signup--title">Crear cuenta</h1>
            <Wizard />
            <div className="signup--shadow">
                <Routes>
                    <Route path="/" element={<Navigate to={routes.signup.personal} />} />
                    <Route path="personal" element={<PersonalSignup />} />
                    <Route path="institute" element={<InstituteSignup />} />
                </Routes>
            </div>
        </WizardProvider>
        </>
    )
}

export default Signup;