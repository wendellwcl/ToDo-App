//Packages
import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

//Css
import './Home.css';

//Custom Hooks
import { useLocalStorage } from '../../../hooks/useLocalStorage';

//Components
import Modal from  '../../MainComponents/Modal';

const Home = () => {

    const { getItem, setItem, removeItem } = useLocalStorage();
    const tasksList = getItem('tasks') || [];

    
    const [ task, setTask ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ importantTask, setImportantTask ] = useState(false);


    //Abrir Modal
    function handleShowAddTaskModal(id){
        document.querySelector(`#${id}`).classList.add('show');
    };

    //Controle de estado da checkbox
    function handleImportantTask(){
        setImportantTask(!importantTask);
    };

    //Ação de Submit
    function handleSubmitTask(e){
        e.preventDefault();

        const newTask = {
            task,
            subject,
            description,
            importantTask
        };

        //Setar no localStorage
        setItem('tasks', [...tasksList, newTask]);

        //Fechar Modal
        let el  = e.target;
        let parent = el.parentNode;
        while(!parent.classList.contains('modal')){
            parent = parent.parentNode;
        };
        parent.classList.remove('show');

        //Limpar/resetar campos
        setTask('');
        setSubject('');
        setDescription('');
        setImportantTask(false);
    };

    return(
        <section id='home-section'>
            <button type='button' className='btn' onClick={() => handleShowAddTaskModal('add-task-modal')}>Adicionar tarefa</button>
            <Modal id='add-task-modal' title='Adicionar tarefa'>
                <form id='create-task-form' onSubmit={e => handleSubmitTask(e)}>
                    <label htmlFor="task">
                        <span>Tarefa *</span>
                        <input type="text" id='task' value={task} onChange={e => setTask(e.target.value)} required/>
                    </label>
                    <label htmlFor="subject">
                        <span>Assunto</span>
                        <input type="text" id='subject' placeholder='(opcional)' onChange={e => setSubject(e.target.value)} />
                    </label>
                    <label htmlFor="description">
                        <span>Descrição</span>
                        <textarea id='description' placeholder='(opcional)' onChange={e => setDescription(e.target.value)}></textarea>
                    </label>
                    <div id='checkbox-container'>
                        <input type="checkbox" id="important-task" onChange={handleImportantTask} />
                        <label htmlFor='important-task'>
                            {importantTask ? <BsStarFill/> : <BsStar/>}
                            Marcar como importante
                        </label>
                    </div>
                    <button type="submit" id='btn-create-task'>
                        Criar
                    </button>
                </form>
            </Modal>
        </section>
    );

};

export default Home;