import useWizard from './useWizard';

import './style.css';

const Wizard = () => {
    const { currentIndex, items } = useWizard();

    const wizardBulletClass = index => (
        (index == currentIndex ? 'wizard--active ' : '').concat('wizard__bullet')
    )

    const wizardConnectClass = index => (
        (1 < index < currentIndex ? 'wizard--active ' : '').concat('wizard__connector')
    )

    return (
        <div className="wizard">
            {Array.from(items.entries()).map(([index, value]) => (
                <div className="wizard__step" key={index}>
                    <span className="wizard__title">{value}</span>
                    <div className='wizard__dot'>
                        <div className={wizardConnectClass(index)}></div>
                        <div className={wizardBulletClass(index)}>
                            <span className="wizard__bullet--number">{index + 1}</span>
                        </div>
                        <div className={wizardConnectClass(index)}></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Wizard;