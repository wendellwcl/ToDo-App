//Css
import './MainContainer.css';

//Components
import Header from "../Header";
import AppRoutes from '../AppRoutes';
import MainModal from '../../SecondaryComponents/MainModal';
import TwoStepsModal from '../../SecondaryComponents/TwoStepsModal';


const MainContainer = () => {

    return(
        <section id="main-container">
            <Header/>
            <main>
                <MainModal/>
                <TwoStepsModal/>
                <AppRoutes/>
            </main>
        </section>
    );

};

export default MainContainer;