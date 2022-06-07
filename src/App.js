import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


import Convertidor from "./components/convertidor";
import Formulario from "./components/formulario";
import Multiplication from "./components/multiplicacion";
import Sum from "./components/suma";


import Menu from "./componentstwo/menu";

export default function App() {
    return (<>
        <div className="app">

            <h1>Welcome To Project!</h1>
            <h5> <strong>Autor:</strong> Isai Chi Lanestoza. </h5>
            <h5> <strong>Group:</strong> TI51BIS. </h5>
            <hr/>
            <BrowserRouter>
                <Menu />
                <hr/>
                <Routes>
                    <Route path="/Celsius" element={<Convertidor />} />
                    <Route path="/Formulario" element={<Formulario />} />
                    <Route path="/Operaciones" element={<Multiplication />} />
                    <Route path="Suma" element={<Sum />} />
                </Routes>
                


            </BrowserRouter>
            
        </div>
    </>)
}
