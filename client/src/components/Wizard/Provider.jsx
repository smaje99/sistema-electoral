import { createContext, useState } from 'react';

export const WizardContext = createContext();

export const WizardProvider = ({ items, handleBack, handleNext, children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const back = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
            handleBack(currentIndex);
        }
    }

    const next = () => {
        if (currentIndex + 1 < items.length) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            handleNext(currentIndex);
        }
    }

    const contextValue = {
        back,
        currentIndex,
        items,
        next
    }

    return (
        <WizardContext.Provider value={contextValue}>
            {children}
        </WizardContext.Provider>
    )
}