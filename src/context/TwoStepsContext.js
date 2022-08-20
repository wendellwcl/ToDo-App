//Packages
import { createContext, useState } from "react";


export const TwoStepsContext = createContext();


export const TwoStepsContextProvider = ( { children } ) => {

    const [ local, setLocal ] = useState();
    const [ index, setIndex ] = useState();
    const [ action, setAction ] = useState();


    return(
        <TwoStepsContext.Provider value={ { local, setLocal,
                                            index, setIndex,
                                            action, setAction }}>
            { children }
        </TwoStepsContext.Provider>
    );

};