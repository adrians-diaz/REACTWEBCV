import React from 'react'
import "./Asistente.scss"
import logo from '../assets/asistente.png';
import ButtonLogout from '../components/Login/ButtonLogout';
const Asistente = ({ asistenteON }) => {


    return (
        <footer className='asistenteDiv'>
            <img onClick={() => asistenteON(false)} className="logoAsistentejil" src={logo}></img>
            <div className="contenedorForm">
                <div className="formAnuncio">
                    <p>Hola querido amigo <strong>{localStorage.getItem("user")}</strong></p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur saepe deserunt similique dolore dignissimos, molestias recusandae eligendi autem dolores totam placeat libero repudiandae aperiam nihil cumque optio. Aliquid, suscipit.</p>
                    <ButtonLogout></ButtonLogout>
                </div>

            </div>

        </footer>
    )
}

export default Asistente