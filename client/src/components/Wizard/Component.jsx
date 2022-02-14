import useWizard from './useWizard';

import './style.css';

const Wizard = () => {
    const { currentIndex, items } = useWizard();

    const wizardDotClass = index => (
        (index == currentIndex ? 'wizard--active ' : '').concat('wizard__dot')
    )

    return (
        <div className="wizard">
            {Array.from(items.entries()).map(([index, value]) => (
                <div className="wizard__step" key={index}>
                    <span className="wizard__title">{value}</span>
                    <div className={wizardDotClass(index)}>;
                        <div className="wizard__connector"></div>
                        <div className="wizard__bullet">
                            <span className="wizard__bullet--number">{index + 1}</span>
                        </div>
                        <div className="wizard__connector"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Wizard;