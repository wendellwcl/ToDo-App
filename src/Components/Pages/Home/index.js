//Packages
import { useState } from 'react';

//Css
import './Home.css';

//Custom Hooks
import { useCRUD } from '../../../hooks/useCRUD';

//Context
import { TasksContextProvider } from '../../../context/TasksContext';

//Components
import TaskItem from '../../SecondaryComponents/TaskItem';
import HomeModal from '../../SecondaryComponents/HomeModal';


const Home = () => {

    const { crudRead } = useCRUD();
    const [ tasksList, setTasksList ] = useState(crudRead('tasks'));

    document.addEventListener('localStorageChange', () => {
        setTasksList(crudRead('tasks'));
    });


    return(
        <TasksContextProvider>
            <section id='home-section'>

                <HomeModal/>

                <ul>
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
        </TasksContextProvider>
    );

};

export default Home;