import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Sobre from "./page/Sobre";
import Projetos from "./page/Projetos";
import Contatos from "./page/Contatos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/projetos" element={ <Projetos /> }></Route>
                <Route path="/contatos" element={ <Contatos /> }></Route>
            </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes