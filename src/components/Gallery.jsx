import React from 'react'

const Gallery = () => {

    
    let estilo= {display:'flex', gap:'10px', justifyContent:'center', marginTop:'20px'}
    const images = [  
        "https://placehold.co/400",  
        "https://placehold.co/400",  
        "https://placehold.co/400"  
    ]; 


  return (
    <section style={estilo}>
        {
            images.map((src,index)=>(
               <img key={index} src={src} alt={`imagen${index+1}`} /> 
            ))
        }
    </section>
  )
}

export default Gallery
