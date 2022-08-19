//Packages
import { useState, useContext } from 'react';

//Css
import './Home.css';

//Custom Hooks
import { useCRUD } from '../../../hooks/useCRUD';

//Context
import { TasksContext } from '../../../context/TasksContext';

//Components
import TaskItem from '../../SecondaryComponents/TaskItem';


const Home = () => {

    const { crudRead } = useCRUD();
    const [ tasksList, setTasksList ] = useState(crudRead('tasks'));
    const { setAction, setTask, setSubject, setDescription, setIsImportant } = useContext(TasksContext);

    document.addEventListener('localStorageChange', () => {
        setTasksList(crudRead('tasks'));
    });


    //Criar nova tarefa
    function handleCreate(){
        setAction('create');
        setTask('');
        setSubject('');
        setDescription('');
        setIsImportant(false);
        document.querySelector("#modal").classList.add('show');
    };


    return(
        <section id='home-section'>

            <button type='button' className='btn' onClick={handleCreate}>Adicionar tarefa</button>

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
    );

};

export default Home;