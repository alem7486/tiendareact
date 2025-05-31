import React from 'react';

function Saludo({name}){

    return(
        <div>
            <h1>Hola {name}, te damos la bienvenida.</h1>
            <p>Este es el componente saludo</p>
        </div>
    )
}

export default Saludo