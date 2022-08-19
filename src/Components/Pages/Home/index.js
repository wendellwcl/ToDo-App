//Packages
import { useState, useRef, useEffect } from 'react';

//Css
import './Home.css';

//Custom Hooks
import { useCRUD } from '../../../hooks/useCRUD';
import { useOverflow } from '../../../hooks/useOverflow';

//Components
import TaskItem from '../../SecondaryComponents/TaskItem';


const Home = () => {

    const { crudRead } = useCRUD();
    const { checkOverflow } = useOverflow();
    const [ tasksList, setTasksList ] = useState(crudRead('tasks'));
    const homeTasksList = useRef();

    document.addEventListener('localStorageChange', () => {
        setTasksList(crudRead('tasks'));
    });

    useEffect(() => {
        checkOverflow(homeTasksList.current);
    }, [tasksList, checkOverflow]);


    return(
        <section id='home-section'>

            <ul className='tasks-list' ref={homeTasksList}>
                {tasksList &&
                    tasksList.map((item, index) => (
                        <TaskItem key={index} 
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

export default Home;