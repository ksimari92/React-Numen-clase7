import React from 'react'
import './Tarjeta.css'

const Tarjeta = ({producto}) => {
  return (
    <div className='card'>
        <img src={producto.image} alt={producto.name} />
        <h4>{producto.name}</h4>
        <h4>Precio: $ {producto.price}</h4>
        {/* <p>{producto.description}</p> fakestoreapi */} 
    </div>
  )
}

export default Tarjeta