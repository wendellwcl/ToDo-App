//Css
import './MainContainer.css';

//Components
import Header from "../Header";
import AppRoutes from '../AppRoutes';
import Modal from '../Modal';

const MainContainer = () => {

    return(
        <section id="main-container">
            <Header/>
            <Modal id='add-task-modal' title='Adicionar tarefa'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laboriosam ex unde, animi illum asperiores similique 
            </Modal>
            <main>
                <AppRoutes/>
            </main>
        </section>
    );

};

export default MainContainer;