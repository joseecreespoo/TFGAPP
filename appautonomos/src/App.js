import Inicio from './Inicio.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Registro from './Registro';
import Login from './Login';
import ParrillaAnuncios from './ParrillaAnuncios';
import PanelControl from './PanelControl';

function App() {
  //Establecemos las diferentes rutas de los componentes que se cargarán
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Inicio></Inicio>} exact>
      </Route>
      <Route path="/login" element={<Login></Login>} >
      </Route>
      <Route path="/registro" element={<Registro></Registro>} >
      </Route>
      <Route path="/parrillaAnuncios" element={<ParrillaAnuncios></ParrillaAnuncios>} >
      </Route>
      <Route path="/panelControl" element={<PanelControl></PanelControl>} >
      </Route>

      </Routes>
    </Router>

    </div>
  );
}

export default App;
