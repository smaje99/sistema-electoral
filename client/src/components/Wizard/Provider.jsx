import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const WizardContext = createContext();

export const WizardProvider = ({ items, children }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const back = (toLocation) => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            navigate(toLocation);
        }
    }

    const next = (toLocation) => {
        if (currentIndex + 1 < items.length) {
            setCurrentIndex(currentIndex + 1);
            navigate(toLocation);
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