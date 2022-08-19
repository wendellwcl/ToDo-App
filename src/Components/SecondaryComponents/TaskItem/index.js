//Packages
import { useContext } from 'react';
import { BsStar, BsStarFill, BsCheckLg, BsPencil, BsXLg } from 'react-icons/bs';

//Css
import './TaskItem.css';

//Context
import { TasksContext } from '../../../context/TasksContext';

//Custom Hooks
import { useCRUD } from '../../../hooks/useCRUD';


const TaskItem = ( { task, subject, description, isImportant, index, local } ) => {

    const { crudRead, crudUpdate, crudDelete } = useCRUD();
    const { setAction, setTask, setSubject, setDescription, setIsImportant, setIndex } = useContext(TasksContext);


    //Editar informações da tarefa
    function handleEdit(local, index){

        //Obter informações da tarefa que será editada
        const { task, subject, description, isImportant } = crudRead(local, index);

        //Setar estados referentes aos inputs, para que as informações sejam exibidas ao usuário
        setAction('update');
        setTask(task);
        setSubject(subject || '');
        setDescription(description || '');
        setIsImportant(isImportant);
        setIndex(index);

        //Abrir modal
        document.querySelector('#home-modal').classList.add('show');
    };

    //Toggle isImportant
    function handleUpdateIsImportant(local, index){

        //Obter informações da tarefa que será editada
        const { task, subject, description, isImportant } = crudRead(local, index);

        //Realizar Toggle na propriedade isImportant
        const updatedTask = {
            task, 
            subject, 
            description,
            isImportant: !isImportant
        };

        //Salvar alteração
        crudUpdate(local, index, updatedTask);
    };


    return(

        <li className='task-item'>

            <div className='task-main'>

                <div>
                    <button className='btn-isImportant' onClick={() => handleUpdateIsImportant(local, index)}>
                        {isImportant ? <BsStarFill/> : <BsStar/>}
                    </button>
                </div>

                <div className='task-infos'>
                    {subject &&
                        <span className='task-subject'>{subject}</span>
                    }

                    <span className='task-title'>
                        {task}
                    </span>
                </div>

                <div className='task-container-btn'>
                    <button className='btn-task'>
                        <BsCheckLg/>
                    </button>
                    <button className='btn-task' onClick={() => handleEdit(local, index)}>
                        <BsPencil/>
                    </button>
                    <button className='btn-task' onClick={() => crudDelete(local, index)}>
                        <BsXLg/>
                    </button>
                </div>

            </div>

            <div>
                {description &&
                    <details className='task-details'>
                        <summary>Exibir descrição</summary>
                        <p>
                            {description}
                        </p>
                    </details>
                }
            </div>

        </li>

    );

};

export default TaskItem;