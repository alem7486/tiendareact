import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/saludo'
import Botones from './components/Botones'
import ListaProductos from './components/ListaDeUsuarios'
import Tarjeta from './components/Tarjeta'


function App(){

  let productos = ['tele', 'cama', 'sofá', 'escritorio']
  const promos = [
    {
      id: 1,
      titulo: 'Placa de video',
      descripcion: 'Aprovechá un 20% de descuento',
      imageURL: 'https://fullh4rd.com.ar/img/productos/3/video-geforce-rtx-4060-8gb-gigabyte-gaming-oc-0.jpg',
      enlace: '/descuento1'
    },
      
    {
      id: 2,
      titulo: 'Placa de audio',
      descripcion: 'Aprovechá un 20% de descuento',
      imageURL: 'https://fullh4rd.com.ar/img/productos/3/video-geforce-rtx-4060-8gb-gigabyte-gaming-oc-0.jpg',
      enlace: '/descuento2'

    }
  ]

  return (
    <>
    {promos.map((promos) => <Tarjeta/>
    )}

    </>

export default App
