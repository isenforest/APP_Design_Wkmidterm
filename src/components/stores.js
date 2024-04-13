import React, { createContext, useState} from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [time, setTime] = useState("yy/mm/dd");
    const [type, setType] = useState("breakfast");
    const [money, setMoney] = useState("100");

    const store = {
        timeState: [time, setTime],
        typeState: [type, setType],
        moneyState: [money, setMoney]
    };

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};