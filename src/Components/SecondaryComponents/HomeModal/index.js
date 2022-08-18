//Packages
import { useState } from "react";
import { BsStar, BsStarFill } from 'react-icons/bs';

//Css
import './HomeModal.css';

//Custom Hooks
import { useCRUD } from '../../../hooks/useCRUD';

//Components
import Modal from  '../../MainComponents/Modal';


const HomeModal = () => {

    const { crudCreate } = useCRUD();

    const [ task, setTask ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ isImportant, setIsImportant ] = useState(false);

    //Abrir Modal
    function handleShowModal(id){
        document.querySelector(`#${id}`).classList.add('show');
    };

    //Controle de estado da checkbox
    function handleIsImportant(){
        setIsImportant(!isImportant);
    };

    //Ação de Submit
    function handleSubmitTask(e){
        e.preventDefault();

        const newTask = {
            task,
            subject,
            description,
            isImportant
        };

        //Setar no localStorage
        crudCreate('tasks', newTask);

        //Fechar Modal
        let el  = e.target;
        let parent = el.parentNode;
        while(!parent.classList.contains('modal')){
            parent = parent.parentNode;
        };
        parent.classList.remove('show');

        //Resetar estados de inputs
        setTask('');
        setSubject('');
        setDescription('');
        setIsImportant(false);
    };


    return(
        <>
        <button type='button' className='btn' onClick={() => handleShowModal('add-task-modal')}>Adicionar tarefa</button>

        <Modal id='add-task-modal' title='Adicionar tarefa'>
            <form id='create-task-form' onSubmit={e => handleSubmitTask(e)}>
                <label htmlFor="task">
                    <span>Tarefa *</span>
                    <input type="text" id='task' value={task} onChange={e => setTask(e.target.value)} required/>
                </label>
                <label htmlFor="subject">
                    <span>Assunto</span>
                    <input type="text" id='subject' placeholder='(opcional)' value={subject} onChange={e => setSubject(e.target.value)} />
                </label>
                <label htmlFor="description">
                    <span>Descrição</span>
                    <textarea id='description' placeholder='(opcional)' value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </label>
                <div id='checkbox-container'>
                    <input type="checkbox" id="important-task" onChange={handleIsImportant} />
                    <label htmlFor='important-task'>
                        {isImportant ? <BsStarFill/> : <BsStar/>}
                        Marcar como importante
                    </label>
                </div>
                <button type="submit" id='btn-create-task'>
                    Criar
                </button>
            </form>
        </Modal>
        </>
    );

};

export default HomeModal;