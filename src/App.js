//Packages
import { HashRouter } from 'react-router-dom';

//Context
import { TasksContextProvider } from './context/TasksContext';
import { TwoStepsContextProvider } from './context/TwoStepsContext';

//Components
import AsideNav from "./Components/MainComponents/AsideNav";
import MainContainer from './Components/MainComponents/MainContainer';

function App() {

  return (
    <div id='app'>
      <TasksContextProvider>
      <TwoStepsContextProvider>
        <HashRouter>
          <AsideNav />
          <MainContainer/>
        </HashRouter>
      </TwoStepsContextProvider>
      </TasksContextProvider>
    </div>
  );

};

export default App;