import React, { useContext } from "react";
import carritoLogo from "../../images/carrito.png";
import "../Navegador/NavBar.css";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
 
    const { totalUnidades } = useContext(CartContext);
    
    return (
            <div>
                <img className="logo-carrito bi bi-cart" src={carritoLogo} alt="logo-carrito" />
                <span>{totalUnidades()}</span>
            </div>
    )
};

export default CartWidget;