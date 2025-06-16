import React from 'react'

const Header = () => {

    let estilos = {backgroundColor: "#4f0df3", padding: "4px", textAlign: "center", color: "white",  backgroundImage: `url('https://i0.wp.com/escueladeartesesai.com/wp-content/uploads/2023/07/Instrumentos-musicales.jpg')`, backgroundPosition: "center 80%", height: 190, opacity: 0.9}

  return (
    <header style={estilos}>
        <h1 style={{padding: 30}}>Music Store</h1>
    </header>
  )
}

export default Header

