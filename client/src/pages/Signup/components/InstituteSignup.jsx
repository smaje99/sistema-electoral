import { useWizard } from '@Components/Wizard';

import routes from '@Helpers/routes';

const InstituteSignup = () => {
	const { back } = useWizard();

	return (
		<div>
            <button onClick={() => back(routes.signup.personal)}>Back</button>
        </div>
	)
}

export default InstituteSignup;