import { useWizard } from '@Components/Wizard';

import routes from '@Helpers/routes';

const PersonalSignup = () => {
    const { next } = useWizard();

    return (
        <div>
            <button onClick={() => next(routes.signup.institute)}>Next</button>
        </div>
    )
}

export default PersonalSignup;