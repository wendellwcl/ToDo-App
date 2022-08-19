//Packages
import { createContext, useState } from "react";


export const TasksContext = createContext();


export const TasksContextProvider = ( { children } ) => {

    const [ action, setAction ] = useState();
    const [ task, setTask ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ isImportant, setIsImportant ] = useState(false);
    const [ index, setIndex ] = useState();


    return(
        <TasksContext.Provider value={ {action, setAction,
                                        task, setTask, 
                                        subject, setSubject,
                                        description, setDescription,
                                        isImportant, setIsImportant,
                                        index, setIndex} }
        >
            { children }
        </TasksContext.Provider>
    );

};