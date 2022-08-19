//Packages
import { HashRouter } from 'react-router-dom';

//Context
import { TasksContextProvider } from './context/TasksContext';

//Components
import AsideNav from "./Components/MainComponents/AsideNav";
import MainContainer from './Components/MainComponents/MainContainer';

function App() {

  return (
    <div id='app'>
      <TasksContextProvider>
      <HashRouter>
        <AsideNav />
        <MainContainer/>
      </HashRouter>
      </TasksContextProvider>
    </div>
  );

};

export default App;