//Packages
import { useState } from 'react';

//Custom Hooks
import { useCRUD } from '../../../hooks/useCRUD';

//Components
import TaskItem from '../../SecondaryComponents/TaskItem';


const Important = () => {

    const { crudRead } = useCRUD();
    const [ tasksList, setTasksList ] = useState(crudRead('tasks'));

    document.addEventListener('localStorageChange', () => {
        setTasksList(crudRead('tasks'));
    });
    

    return(
        <section>
            <ul>
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