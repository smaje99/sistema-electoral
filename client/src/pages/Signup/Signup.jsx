import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Wizard, WizardProvider } from '@Components/Wizard';

import InstituteSignup from './components/InstituteSignup';
import PersonalSignup from './components/PersonalSignup';

import './style.css';

const items = [ 'Institucional', 'Personal'];

const Signup = () => {
    const [idInstitute, setIdInstitute] = useState(null);
    const personalRef = useRef();
    const instituteRef = useRef();
    const elements = [ personalRef, instituteRef ];

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
            <h1 className="signup--title">Crear cuenta</h1>
            <WizardProvider {...{ items, handleNext }}>
                <Wizard />
                <section className="form--shadow signup__register">
                    <InstituteSignup handleInstitute={setIdInstitute} ref={instituteRef} />
                    <PersonalSignup institute={idInstitute} ref={personalRef} />
                </section>
            </WizardProvider>
        </main>
        </>
    )
}

export default Signup;