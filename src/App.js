import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculadora from './Calculadora';
import Home from './home';
import Usuarios from './users';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/calculadora' element={<Calculadora/>}></Route>
        <Route path='/usuarios' element={<Usuarios/>}></Route>
      </Routes>
    </Router> 
  );
}

export default App;
