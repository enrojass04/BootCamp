import React from 'react';
import '../estilos/Perfil.css';
import '../App.css';
import Contador from './Contador';


function Perfil(props){
    return(
        <div className='contenedor-perfil'>

            <div className='columna imagen'>
                <img className='imagen-perfil'
                src={require(`../imagenes/${props.id}.png`)}
                alt='Foto de desarrollador' />
            </div>
            
            <div className=' columna contenedor-texto-perfil'>
                <p>
                    <strong>Nombre: {props.name}</strong> 
                </p> 
                <p>
                    <strong>Edad: {props.age}</strong> 
                </p>        
                <p>
                    <strong>Equipo: {props.team}</strong>
                </p>
                <p className='description'>"{props.description}"</p>
            </div>
            {/* Se sgregan los botones de las redes sociales */}
            <div className='columna redes'> 
                <p className='redes-text'>
                    <strong>Redes Sociales</strong>
                </p>
                <Contador
                        urlRed = {props.twitter} 
                        networkName = 'Twitter'  
                />
                <Contador
                        urlRed = {props.ig} 
                        networkName = 'Instagram'  
                />
            </div>

        </div>
    );
}
export default Perfil;