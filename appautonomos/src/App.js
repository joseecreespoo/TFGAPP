import './App.css';
import Inicio from './Inicio.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Registro from './Registro';
import Login from './Login';
import ParrillaAnuncios from './ParrillaAnuncios';

function App() {
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

      </Routes>
    </Router>

    </div>
  );
}

export default App;
