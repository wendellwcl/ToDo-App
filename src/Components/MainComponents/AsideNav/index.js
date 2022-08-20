//Packages
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowBarLeft,  BsX, BsListTask, BsStarFill } from "react-icons/bs";

//Css
import "./AsideNav.css";


const AsideNav = () => {

    const [ isExpanded, setIsExpanded ] = useState(false);

    //Referenciando elementos
    const asideEl = useRef();
    const fadeEl = useRef();

    //Abrir & Fechar AsideNav
    function handleExpandAside(){
        const aside = asideEl.current;
        const fade = fadeEl.current;
        aside.classList.toggle('expand');
        fade.classList.toggle('show');
        setIsExpanded(!isExpanded);
    };
    
    //Fechar AsideNav
    function handleCloseAside(){
        const aside = asideEl.current;
        const fade = fadeEl.current;
        if(aside.classList.contains('expand')){
            aside.classList.remove('expand');
            fade.classList.remove('show');
            setIsExpanded(!isExpanded);
        };
    };


    return(
        <>
        <aside ref={asideEl}>

            <button type="button" id="expand-btn" onClick={handleExpandAside}>
                { isExpanded ? <BsX/> : <BsArrowBarLeft/> }
            </button>

            <nav id="aside-nav">
                <ul>
                    <li className="nav-link" onClick={handleCloseAside}>
                        <NavLink to='/'>
                            <span className="link-icon"><BsListTask/></span>
                            <span className="link-text">Lista de Tarefas</span>
                        </NavLink>
                    </li>
                    <li className="nav-link" onClick={handleCloseAside}>
                        <NavLink to='/important'>
                            <span className="link-icon"><BsStarFill/></span>
                            <span className="link-text">Marcadas como Importante</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
        </aside>

        <div id="asideNav-fade" ref={fadeEl} onClick={handleExpandAside}></div>
        </>
    );

};

export default AsideNav;