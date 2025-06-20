// import React from 'react'
import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {


  const { images, isLoading } = useFetchGifs( category );
  // console.log( { images , isLoading });
// 

  // getGifs(category);

  return (
    <>  
    <h3>{ category }</h3>
    {
      isLoading && ( <h2>Cargando...</h2>)
    }
    <div className="card-grid">
      {
        images.map( (image ) => (
          <GifItem 
          key={ image.id }
          { ...image }
          />
        ))
      }
    </div>
    
    </>
  )
}

// export default GifGrid
