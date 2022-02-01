import useWizard from './useWizard';

import './style.css';

const Wizard = () => {
    const wizard = useWizard();

    return (
        <div className="wizard">
            {Array.from(wizard.items.entries()).map(([index, value]) => (
                <div className="wizard__step">
                    <span className="wizard__title">{value}</span>
                    <div className="wizard__dot wizard--active">
                        <div class="wizard__connector"></div>
                        <div className="wizard__bullet">
                            <span className="wizard__bullet--number">{index + 1}</span>
                        </div>
                        <div class="wizard__connector"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Wizard;