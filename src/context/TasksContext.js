//Packages
import { createContext, useEffect, useState } from "react";

//Custom hooks
import { useLocalStorage } from '../hooks/useLocalStorage';


export const TasksContext = createContext();


export const TasksContextProvider = ( { children } ) => {

    const { getItem } = useLocalStorage();

    const [ action, setAction ] = useState();
    const [ task, setTask ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ isImportant, setIsImportant ] = useState(false);
    const [ index, setIndex ] = useState();
    const [ completeTasksCount, setCompleteTasksCount ] = useState();

    useEffect(() => {
        const count = getItem("completeTasksCount") || 0;
        setCompleteTasksCount(count);
    }, [getItem, setCompleteTasksCount]);


    return(
        <TasksContext.Provider value={ {action, setAction,
                                        task, setTask, 
                                        subject, setSubject,
                                        description, setDescription,
                                        isImportant, setIsImportant,
                                        index, setIndex,
                                        completeTasksCount, setCompleteTasksCount} }
        >
            { children }
        </TasksContext.Provider>
    );

};