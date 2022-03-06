import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Wizard, WizardProvider } from '@Components/Wizard';

import ChargeSignup from './components/ChargeSignup';
import InstituteSignup from './components/InstituteSignup';
import PersonalSignup from './components/PersonalSignup';
import RoleSignup from './components/RoleSignup';

import items from '@Helpers/items';

import './style.css';

const Signup = () => {
    const [idInstitute, setIdInstitute] = useState(null);
    const personalRef = useRef();
    const instituteRef = useRef();
    const roleRef = useRef();
    const chargeRef = useRef();
    const elements = [ personalRef, instituteRef, roleRef, chargeRef ];

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
            <WizardProvider {...{ items, handleNext }}>
                <Wizard />
                <section className="form--shadow signup__register">
                    <InstituteSignup handleInstitute={setIdInstitute} ref={instituteRef} />
                    <PersonalSignup institute={idInstitute} ref={personalRef} />
                    <RoleSignup institute={idInstitute} ref={roleRef} />
                    <ChargeSignup institute={idInstitute} ref={chargeRef} />
                </section>
            </WizardProvider>
        </main>
        </>
    )
}

export default Signup;