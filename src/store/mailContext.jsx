import { createContext, useContext, useState } from "react";

export const mailContext = createContext();

export const MailContextProvider = ({ children }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <mailContext.Provider value={{ clicked, setClicked }}>
            {children}
        </mailContext.Provider>
    );
};

export const useMailContext = () => {
    return useContext(mailContext);
};
