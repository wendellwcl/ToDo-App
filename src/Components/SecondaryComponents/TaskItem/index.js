//Packages
import { BsStar, BsStarFill, BsCheckLg, BsPencil, BsXLg } from 'react-icons/bs';

//Css
import './TaskItem.css';

//Custom Hooks
import { useCRUD } from '../../../hooks/useCRUD';


const TaskItem = ( { task, subject, description, isImportant, index, local } ) => {

    const { crudUpdate, crudDelete } = useCRUD();


    return(

        <li className='task-item'>

            <div className='task-main'>

                <div>
                    <button className='btn-isImportant'>
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
                    <button className='btn-task'>
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