//Packages
import { Link } from "react-router-dom";


const AsideNav = () => {

    return(
        <aside>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>Lista de Tarefas</Link>
                    </li>
                    <li>
                        <Link to='/important'>Marcadas como Importante</Link>
                    </li>
                    <li>
                        <Link to='/notes'>Notas</Link>
                    </li>
                </ul>
            </nav>
            
        </aside>
    );

};

export default AsideNav;