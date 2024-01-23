import {createContext, useState} from "react";

export const GlobalContext = createContext()
export const GlobalContextProvider = (props) => {
    const [context, setContext] = useState({

    })
    return (
        <GlobalContext.Provider value={[context, setContext]}>
            {props.children}
        </GlobalContext.Provider>
    )
}