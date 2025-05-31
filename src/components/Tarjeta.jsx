import React from "react";
import Botones from "./Botones";

function Tarjeta(){
    
    return ( 
        <div>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <Botones texto={botonTexto} color={botonColor}/>
        </div>
    )
}