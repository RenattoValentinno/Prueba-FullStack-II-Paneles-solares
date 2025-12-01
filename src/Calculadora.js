import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import CalculadoraIntegral from "./components/CalculadoraIntegral";
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function Calculadora() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Servicios />
      <Soluciones />
      <CalculadoraIntegral/>
      <Planes />
      <Testimonios />
      <FAQ />
      <Contacto />
      <Footer />
    </div>
  );
}

export default Calculadora;