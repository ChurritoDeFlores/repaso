import './App.css';
import {Route, Routes, BrowserRouter} from'react-router-dom'
//Componentes
import Reloj from './componentes/Reloj/Reloj';
import Navbar from './componentes/Navbar/Navbar';
import Contador from './componentes/Contador/Contador';
import Tareas from './componentes/Tareas/Tareas';
import ListaUsuarios from './componentes/ListaUsuarios/ListaUsuarios';
// Paginas
import Form_Usuarios from './paginas/FormUsuarios/FormUsuarios';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="d-flex justify-content-center">
                <Routes>
                    <Route path="/reloj" element={<Reloj />} />
                    <Route path="/contador" element={<Contador/>} />
                    <Route path="/tareas" element={<Tareas/>} />
                    <Route path="/usuarios" element={<div className='container'><ListaUsuarios/></div>}/>
                    <Route path="/formusuarios" element={<Form_Usuarios/>}/>
                </Routes>
            </div>
            
        </BrowserRouter>
    );
}

export default App;
