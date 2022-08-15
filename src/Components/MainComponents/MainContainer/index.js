//Css
import './MainContainer.css';

//Components
import Header from "../Header";
import AppRoutes from '../AppRoutes';

const MainContainer = () => {

    return(
        <section id="main-container">
            <Header/>
            <main>
                <AppRoutes/>
            </main>
        </section>
    );

};

export default MainContainer;