import { useState } from 'react'
import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router";
import { HashRouter, Routes, Route } from "react-router";

import Encabezado from './componentes/Encabezado'
import PiePagina from './componentes/PiePagina';
import Inicio from './paginas/Inicio'
import Servicios from './paginas/Servicios'
import Contacto from './paginas/Contacto'
import NoExiste from './paginas/NoExiste';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Encabezado />

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NoExiste />} />
          </Routes>
        </main>

        <PiePagina />
      </HashRouter>

    </>
  )
}

export default App
