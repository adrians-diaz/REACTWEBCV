
import './App.css';
import { SWContextProvider } from "./context/context"
import Nav from "./components/Nav/Nav"

import Users from "./components/Users/Users"
import Projects from "./components/Projects/Projects"
import Experiencia from "./components/Experiencia/Experiencia"
import Curruculum from "./components/Curruculum/Curruculum"

import Asistente from "./ASISTENTE/Asistente"
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/* import { login } from "./Auth/Auth";
 */
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

import { RequireAuth } from "./Auth/RequireAuth"; 


function App() {
  const [asistenteShow, setAsistenteShow] = useState(false);
  const asistenteON = (valor) =>{
    setAsistenteShow(valor);
  }
  /* const authenticated = user != null; */

  /* const logoutUser = () => setUser(null);  */
  
  const [asistenteActive, updateAsistente] = useState(!localStorage.getItem("token") ? (true) : (false));
  
  const setAsistente = (switchAsistente) => {
    updateAsistente(switchAsistente);
  }

  return (
    <SWContextProvider>
    <Router> 
    <div className="App">
      <Nav /* asistenteActive={asistenteActive} */ asistenteON={asistenteON}/>
      <Routes>
        <Route path="/" element={<Users></Users>}></Route>
        <Route path="/Proyectos" element={<RequireAuth><Projects></Projects></RequireAuth>}></Route>
        <Route path="/Experiencia" element={<Experiencia></Experiencia>}></Route>
        <Route path="/Curruculum" element={<Curruculum></Curruculum> }></Route>
        <Route path="/Login" element={<Login setAsistente={setAsistente}></Login>} />
        <Route path="/register" element={<Register />} />
      </Routes> 
      {asistenteShow && <Asistente asistenteON={asistenteON}></Asistente>}
      
    </div>
    </Router>  
    </SWContextProvider>
  );
}

export default App;
