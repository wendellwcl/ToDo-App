//Packages
import { useContext } from "react";
import { BsStar, BsStarFill } from 'react-icons/bs';

//Css
import './MainModal.css';

//Custom Hooks
import { useCRUD } from '../../../hooks/useCRUD';

//Context
import { TasksContext } from "../../../context/TasksContext";

//Components
import Modal from  '../../MainComponents/Modal';


const HomeModal = () => {

    const { crudCreate, crudUpdate } = useCRUD();
    const { action,  
            task, setTask, 
            subject, setSubject, 
            description, setDescription, 
            isImportant, setIsImportant,
            index } = useContext(TasksContext);


    //Resetar inputs
    function resetInputs(){
        setTask('');
        setSubject('');
        setDescription('');
        setIsImportant(false);
    };

    //Controlar estado da checkbox
    function handleIsImportant(){
        setIsImportant(!isImportant);
    };

    //Submit - Salvar tarefa
    function handleSubmitTask(e){
        e.preventDefault();

        const newTask = {
            task,
            subject,
            description,
            isImportant
        };

        //Verificar e realizar ação (create / update)
        if(action === 'create'){
            crudCreate('tasks', newTask);
        } else if(action === 'update'){
            crudUpdate('tasks', index, newTask);
        };

        //Fechar Modal
        let el  = e.target;
        let parent = el.parentNode;
        while(!parent.classList.contains('modal')){
            parent = parent.parentNode;
        };
        parent.classList.remove('show');

        //Resetar estados de inputs
        resetInputs();
    };


    return(
        <Modal id='modal' title='Tarefa'>
            <form id='create-task-form' onSubmit={e => handleSubmitTask(e)}>
                <label htmlFor="task">
                    <span>Tarefa *</span>
                    <input type="text" 
                            id='task' 
                            value={task} 
                            onChange={e => setTask(e.target.value)} 
                            required
                    />
                </label>
                <label htmlFor="subject">
                    <span>Assunto</span>
                    <input type="text" 
                            id='subject' 
                            placeholder='(opcional)' 
                            value={subject} 
                            onChange={e => setSubject(e.target.value)} 
                    />
                </label>
                <label htmlFor="description">
                    <span>Descrição</span>
                    <textarea id='description' 
                                placeholder='(opcional)' 
                                value={description} 
                                onChange={e => setDescription(e.target.value)}>
                    </textarea>
                </label>
                <div id='checkbox-container'>
                    <input type="checkbox" id="important-task" onChange={handleIsImportant} />
                    <label htmlFor='important-task'>
                        {isImportant ? <BsStarFill/> : <BsStar/>}
                        Marcar como importante
                    </label>
                </div>
                <button type="submit" id='btn-create-task'>
                    Salvar
                </button>
            </form>
        </Modal>
    );

};

export default HomeModal;