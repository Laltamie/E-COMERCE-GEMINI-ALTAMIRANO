import React from 'react'
import { useContext } from 'react';
import "../Item/ItemCart.css"
import { CartContext } from '../../Context/CartContext';


const ItemCart = ({ item }) => {
   
    const { borrarProducto } = useContext(CartContext);

  return (

    <div className="row">
      <div className="container">
            <div className="card card-Item" width="80px" margin="20px">
              <img src={'/images/' + item.img} alt={item.title} className="card-img-top" width="150px"/>
                 <div className="card-body">
                  <h2 className="card-title text-center">Título: {item.name}</h2>
                    <h3 className="card-text text-center">Cantidad: {item.cantidad}</h3>
                    <h3 className="card-text text-center">Precio u.: {item.precio}</h3>
                    <h3 className="card-text text-center">Subtotal: $ {item.cantidad * item.precio}</h3>
                    <hr />
                    <button type="button" className="btn btn-danger boton-eliminar" onClick={() => borrarProducto(item.id)}>Eliminar</button>
                </div>
          </div>
      </div>

    </div> 

    

  )
}

export default ItemCart;