import { useState, useEffect } from "react";
import Tarjeta from "./components/Tarjeta";
import axios from 'axios';
import './App.css'

/*https://fakestoreapi.com/docs*/


function App() {

  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    let response = await axios.get('http://localhost:3000/products');

    console.log(response)

    setProductos(response.data);
  }

  useEffect(() => {
    getProductos();
  },
    []);

  return (
    <>
      <h1>Mi store</h1>
      <div className="contenedor-cards">
        {productos.map((producto, index) => <Tarjeta key={index} producto={producto} />)}
      </div>
  
    </>
  )
}

export default App
