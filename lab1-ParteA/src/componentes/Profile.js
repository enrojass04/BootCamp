import React from 'react';
import '../estilos/Perfil.css';
// import '../imagenes/dev1.png'

function Profile(props) {
    return (
        <div className='container-profile'>
            <img className='image-profile'
                src={require(`../imagenes/${props.id}.png`)}
                alt={props.id}    
            />
            <div className='container-text-profile'>
                <p className='items'>
                    <b className='conta-name'>Nombre: {props.name} </b>
                </p>
                <p className='items'>
                    <b>Edad: {props.age} </b>
                </p> 
                <p className='items'>
                    <b>País: {props.country} </b>
                </p>  
                <p className='items'>
                    <b>Equipo: {props.team} </b>
                </p>
                <p className='description-profile'>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Profile;