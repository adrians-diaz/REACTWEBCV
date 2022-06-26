import React, { useEffect, useState } from 'react'
import "./Nav.scss"
import { Link } from "react-router-dom"
import logo from '../../assets/asistente.png';
const Nav = ({asistenteActive, asistenteON}) => {
    console.log(localStorage.getItem("token"));

    const [navFun, setnavFun] = useState(true);
    const desplegar = (key) => {
        switch (key) {
            case "up":
                setnavFun(false);
                break;
            case "down":
                setnavFun(true);
                break;
            default:
                break;
        }
    }


    
    
    useEffect(() => {
       alert("el nav se cargo") 
      }, [])

    return (
        <div>
            {navFun ? (
                <nav>
                    <ul>
                        <li><Link to="/"><span className='spanBrilla'>Presentacion</span></Link></li>
                        <li><Link to="/Curruculum"><span className='spanBrilla'>Curriculum</span></Link></li>
                        <li><Link to="/Experiencia"><span className='spanBrilla'>Experiencia</span></Link></li>
                        <li><Link to="/Proyectos"><span className='spanBrilla'>Proyectos</span></Link></li>
                    </ul>
                    {!localStorage.getItem("token") ? (<Link to="/Login"><img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="logo" /></Link>) : (<img className="asistenteIco" onClick={() => asistenteON(true)} src={logo} alt="asistente ico"></img>)}
                    
                </nav>
            ) : (
                <></>
            )}
            <div className="NavInferior">
                {navFun ? (
                    <button className="NavInferior_boton_Up" onClick={() => desplegar("up")}>▲</button>
                ) : (
                    <button className="NavInferior_boton_Down" onClick={() => desplegar("down")}>▼</button>
                )}
            </div>
            
               
        </div>
    )
}

export default Nav