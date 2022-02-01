import { useContext } from 'react';

import { WizardContext } from './Provider';

const useWizard = () => useContext(WizardContext);

export default useWizard;