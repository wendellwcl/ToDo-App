//Css
import './MainContainer.css';

//Components
import Header from "../Header";
import AppRoutes from '../AppRoutes';
import MainModal from '../../SecondaryComponents/MainModal';


const MainContainer = () => {

    return(
        <section id="main-container">
            <Header/>
            <main>
                <MainModal/>
                <AppRoutes/>
            </main>
        </section>
    );

};

export default MainContainer;