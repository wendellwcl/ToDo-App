//Packages
import { HashRouter } from 'react-router-dom';

//Components
import AppRoutes from "./Components/MainComponents/AppRoutes";
import AsideNav from "./Components/MainComponents/AsideNav";


function App() {

  return (
    <div id='app'>
      <HashRouter>
        <AsideNav />
        <AppRoutes />
      </HashRouter>
    </div>
  );

};

export default App;