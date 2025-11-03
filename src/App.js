import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import CalculadoraIntegral from "./components/CalculadoraIntegral";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Servicios />
      <Soluciones />
      <CalculadoraIntegral/>
    </div>
  );
}

export default App;
