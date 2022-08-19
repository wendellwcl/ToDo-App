//Packages
import { useEffect, useState, useContext } from 'react';
import { BsPlusCircle } from 'react-icons/bs';

//Css
import './Header.css';

//Context
import { TasksContext } from '../../../context/TasksContext';


const Header = () => {

    const { setAction, setTask, setSubject, setDescription, setIsImportant } = useContext(TasksContext);
    const [ dateData, setDateData ] = useState();

    //Obter informações sobre data
    useEffect(() => {

        const monthsList = [ 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
                             'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ];

        const daysOfTheWeekList = [ 'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 
                                    'quinta-feira', 'sexta-feira', 'sábado' ];

        const date = new Date();
        const day = date.getDate();
        const month = monthsList[date.getMonth()];
        const year = date.getFullYear();
        const dayOfTheWeek = daysOfTheWeekList[date.getDay()];

        setDateData( { day, month, year, dayOfTheWeek } );

    }, []);

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
        <header>
            { dateData &&
                <div id='date'>
                    <span id='day'>
                        {dateData.day}
                    </span>
                    <span id='day-of-the-week'>
                        {dateData.dayOfTheWeek}
                    </span>
                    <span id='month-year'>
                        {dateData.month}, {dateData.year}
                    </span>
                </div>
            }

            <button type='button' className='btn' id='create-btn' onClick={handleCreate}>
                <BsPlusCircle/> Adicionar tarefa
            </button>

        </header>
    );

};

export default Header;