import { useRef } from 'react';
import { Helmet } from 'react-helmet';

import { Wizard, WizardProvider } from '@Components/Wizard';

import InstituteSignup from './components/InstituteSignup';
import PersonalSignup from './components/PersonalSignup';

import './style.css';

const items = [ 'Personal', 'Institucional' ];

const Signup = () => {
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

    return (
        <>
        <Helmet>
            <title>Crear cuenta | Sistema Electoral</title>
        </Helmet>

        <main className="signup">
            <WizardProvider {...{ items, handleBack, handleNext }}>
                <h1 className="signup--title">Crear cuenta</h1>
                <Wizard />
                <section className="form--shadow signup__register">
                    <PersonalSignup ref={personalRef} />
                    <InstituteSignup ref={instituteRef} />
                </section>
            </WizardProvider>
        </main>
        </>
    )
}

export default Signup;