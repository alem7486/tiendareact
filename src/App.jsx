import './EstilosGenerales.css'
import Saludo from './components/Saludo'
import Botones from './components/Botones'
import ListaProductos from './components/ListaDeUsuarios'
import Tarjeta from './components/Tarjeta'
import Header from './components/header'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'


function App()
{

    let productos = ['producto1', 'producto2']
    const promos = [
{
    id: 1,
    titulo: 'Producto 1',
    descripcion: 'Descripción producto 1',
    imagenURL: 'http://plaxcehold.co/200x200',
    enlace:'/producto1'
},

{
    id: 2,
    titulo: 'Producto 2',
    descripcion: 'Descripción producto 2',
    imagenURL: 'http://plaxcehold.co/200x200',
    enlace:'/producto2'
}

];

return (
<>
<Header />
<Nav />
<Main />
<Gallery />
<Footer />
</>
 
)
}

export default App