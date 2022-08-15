//Packages
import { HashRouter } from 'react-router-dom';

//Components
import AsideNav from "./Components/MainComponents/AsideNav";
import MainContainer from './Components/MainComponents/MainContainer';

function App() {

  return (
    <div id='app'>
      <HashRouter>
        <AsideNav />
        <MainContainer/>
      </HashRouter>
    </div>
  );

};

export default App;