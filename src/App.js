//Css
import './App.css';

//Components
import Routes from "./Components/MainComponents/Routes";
import NavAside from "./Components/MainComponents/NavAside";


function App() {

  return (
    <div id='app'>
      <NavAside />
      <Routes />
    </div>
  );

};

export default App;