import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Sobre from "./page/Sobre";
import Projetos from "./page/Projetos";
import Contatos from "./page/Contatos";
import Page404 from "./page/Page404";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/projetos" element={ <Projetos /> }></Route>
                <Route path="/contatos" element={ <Contatos /> }></Route>
                <Route path="*" element={ <Page404 /> }></Route>
            </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes