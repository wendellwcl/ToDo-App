//Packages
import { useEffect, useState } from 'react';

//Css
import './Header.css';


const Header = () => {

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


    return(
        <header>
            { dateData &&
                <span>{dateData.day},{dateData.dayOfTheWeek} - {dateData.month},{dateData.year}</span>
            }
        </header>
    );

};

export default Header;