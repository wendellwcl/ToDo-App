//Packages
import { useRef, useState, useEffect } from 'react';

//Css
import './Important.css';

//Custom Hooks
import { useCRUD } from '../../../hooks/useCRUD';
import { useOverflow } from '../../../hooks/useOverflow';

//Components
import TaskItem from '../../SecondaryComponents/TaskItem';


const Important = () => {

    const { crudRead } = useCRUD();
    const { checkOverflow } = useOverflow();
    const [ tasksList, setTasksList ] = useState(crudRead('tasks'));
    const importantTasksList = useRef();

    document.addEventListener('localStorageChange', () => {
        setTasksList(crudRead('tasks'));
    });

    useEffect(() => {
        checkOverflow(importantTasksList.current);
    }, [tasksList, checkOverflow]);
    

    return(
        <section id='important-section'>
            <ul className='tasks-list' ref={importantTasksList}>
                {tasksList &&
                    tasksList.map((item, index) => (
                        item.isImportant && <TaskItem key={index} 
                                            task={item.task} 
                                            subject={item.subject} 
                                            description={item.description} 
                                            isImportant={item.isImportant} 
                                            local={'tasks'}
                                            index={index} 
                                            />
                    ))
                }
            </ul>
        </section>
    );

};

export default Important;