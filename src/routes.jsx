import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Sobre from "./page/Sobre";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/" element={ <Sobre /> }></Route>
            </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes