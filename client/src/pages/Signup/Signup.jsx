import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Wizard, WizardProvider } from '@Components/Wizard';

import InstituteSignup from './components/InstituteSignup';
import PersonalSignup from './components/PersonalSignup';

import useAuth from '@Auth/useAuth';
import { createAccount as service } from '@Services/admin.service';

import routes from '@Helpers/routes';
import config from '@Utils/config';

import './style.css';

const items = [ 'Personal', 'Institucional' ];

const Signup = () => {
    const { login } = useAuth();
    const [personalData, setPersonalData] = useState({});
    const [instituteData, setInstituteData] = useState({});

    const getResets = () => {
        const resets = [ personalData.reset, institute.reset ];
        delete personalData.reset;
        delete instituteData.reset;
        return resets;
    }

    const onSubmitToService = async () => {
        const resets = getResets();

        try {
            console.log({ personalData, instituteData });
            // Send the registration data to the service and get the session data
            const data = await service(personalData, instituteData);
            // Restore personal and institutional registration forms
            resets.forEach(e => e());
            // Log in
            login(data, routes.dashboard());
            toast.success('Cuenta personal e institucional creadas', config.toast);
        } catch (error) {
            toast.error(error.message, config.toast);
        }
    }

    return (
        <>
        <Helmet>
            <title>Crear cuenta</title>
        </Helmet>

        <div className="signup">
            <WizardProvider items={items}>
                <h1 className="signup--title">Crear cuenta</h1>
                <Wizard />
                <div className="form--shadow signup__register">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to={routes.signup.personal} />}
                        />
                        <Route
                            path="personal"
                            element={<PersonalSignup
                                data={personalData}
                                handleData={setPersonalData}
                            />}
                        />
                        <Route
                            path="institute"
                            element={<InstituteSignup
                                data={instituteData}
                                handleData={setInstituteData}
                                onSubmitToService={onSubmitToService}
                            />}
                        />
                    </Routes>
                </div>
            </WizardProvider>
        </div>
        </>
    )
}

export default Signup;