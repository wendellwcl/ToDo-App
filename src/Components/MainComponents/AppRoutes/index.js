//Packages
import { Routes, Route } from "react-router-dom";

//Pages
import Home from '../../Pages/Home';
import Important from "../../Pages/Important";
import Notes from '../../Pages/Notes';


const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/important" element={<Important/>} />
            <Route path="/notes" element={<Notes/>} />
        </Routes>
    );

};

export default AppRoutes;