import React from 'react'

const Gallery = () => {
    const images = [
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400"

    ];

  return (
  <section>
    {
        images.map((src,index)=>(
            <img key={index} src={src} alt={`imagen${index+1}`} />
                ))
    }
  </section>
  )
}
 
export default Gallery
