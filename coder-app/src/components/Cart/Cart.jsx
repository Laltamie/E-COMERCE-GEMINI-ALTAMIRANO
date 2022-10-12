import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCart from "../Item/ItemCart";
import "../Cart/Cart.css"


const Cart = () => {
    const { cart, totalPrecio, borrarCart } = useContext(CartContext);

    return (
      <>
        <div>
          <div className="container greeting py-100">

            {cart.length === 0 ? (
              <div className="container d-flex justify-content-evenly cont-cart text-center"> 
                <p>¡ No hay elementos en el carrito !</p> 
                <div><Link to="/"> Comprar!</Link></div>
              </div>
            ) : (
              cart.map(item => <ItemCart key={item.id} item={item}/>)
            )}

          </div>
          <hr />
          {
            cart.length === 0 ? (
              <div className="cart-conten">
                <p>
                  Total: $ {totalPrecio()}
                </p>
                <button disabled type="button" className="btn btn-danger" onClick={borrarCart}>Vaciar Carrito</button>
                <Link to="/checkout" className="disabled-link">Finalizar Compra</Link>
              </div>

            ) : (
              <div className="cart-conten">
                <p className="text-light">
                  Total: $ {totalPrecio()}
                </p>
                <button type="button" className="btn btn-danger" onClick={borrarCart}>Vaciar Carrito</button>
                <Link to="/checkout" >Finalizar Compra</Link>
              </div>
            )}
           
        </div>
      </>  
    )
  };


export default Cart;
 
