import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Wizard, WizardProvider } from '@Components/Wizard';

import InstituteSignup from './components/InstituteSignup';
import PersonalSignup from './components/PersonalSignup';

import useAuth from '@Auth/useAuth';
import { createAccount as service } from '@Services/user/admin.service';
import resolver from '@Resolvers/signup.resolver';

import routes from '@Helpers/routes';
import config from '@Utils/config';

import './style.css';

const items = [ 'Personal', 'Institucional' ];

const Signup = () => {
    const { login } = useAuth();
    const methods = useForm({ resolver });
    const personalRef = useRef();
    const instituteRef = useRef();
    const elements = [ personalRef, instituteRef ];

    const handleBack = (index) => {
        elements[index - 1]?.current.classList.toggle('hidden');
        elements[index].current.classList.toggle('hidden');
    }

    const handleNext = (index) => {
        elements[index + 1]?.current.classList.toggle('hidden');
        elements[index].current.classList.toggle('hidden');
    }

    const onSubmit = async (formData) => {
        const { personal, institute } = formData;

        try {
            console.log({ personal, institute });
            // Send the registration data to the service and get the session data
            const sessionData = await service(personal, institute);
            console.log(sessionData);
            // Restore personal and institutional registration forms
            methods.reset();
            // Log in
            login(sessionData, routes.dashboard());
            toast.success('Cuenta personal e institucional creadas', config.toast);
        } catch (error) {
            toast.error(error.message, config.toast);
        }
    }

    useEffect(() => {
        Object
            .values(methods.formState.errors)
            .forEach(({ message }) => toast.warning(message, config.toast))
    }, [methods.formState.errors])

    return (
        <>
        <Helmet>
            <title>Crear cuenta | Sistema Electoral</title>
        </Helmet>

        <main className="signup">
            <WizardProvider {...{ items, handleBack, handleNext }}>
                <h1 className="signup--title">Crear cuenta</h1>
                <Wizard />
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        className="form--shadow signup__register"
                    >
                        <PersonalSignup ref={personalRef} />
                        <InstituteSignup ref={instituteRef} />
                    </form>
                </FormProvider>
            </WizardProvider>
        </main>
        </>
    )
}

export default Signup;