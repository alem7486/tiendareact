import React from "react";

const Botones = ({texto, color}) => {
    
    let estilo = {backgroundColor: color, color: 'white', border: 'none', padding: '10px'}

    return (
        <button className='btn' style = {estilo}>{texto}</button>
    )
}

export default Botones 