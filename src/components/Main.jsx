import React from 'react'

const Main = ({data}) => {
  // console.log(data); 
  
  return (
    <main className='main'>
        <h2>Bienvenidos</h2>
        <p>Tenemos la mejor tecnología en música.</p>
        <img style={{width:'50%'}} src='https://web-assets.esetstatic.com/tn/-x700/wls/2024/11-2024/ai-music-creation-authorship.jpeg'
        />
    </main>
  )
}

export default Main