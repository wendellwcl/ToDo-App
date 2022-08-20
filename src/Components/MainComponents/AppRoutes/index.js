//Packages
import { Routes, Route } from "react-router-dom";

//Pages
import Home from '../../Pages/Home';
import Important from "../../Pages/Important";


const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/important" element={<Important/>} />
        </Routes>
    );

};

export default AppRoutes;