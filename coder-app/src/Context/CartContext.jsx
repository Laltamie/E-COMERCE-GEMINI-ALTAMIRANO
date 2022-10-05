import { createContext, useState } from "react"

export const CartContext = createContext();

const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);

    //agregar al carrito
    const addProducto = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(producto.id)) {
            //busco el producto y le sumo la cantidad
            sumarCantidad(producto);
        } else {
            setCart([...cart, producto]);
        }
    };

    //buscamos un producto
     const isInCart = (id) =>  cart.find(producto => producto.id === id) ? true : false;

    //  sumar cantidad
     const sumarCantidad = (producto) => {
        const cartUpdated = cart.map((productoEnElCarrito) => {
            if (producto.id === productoEnElCarrito.id) {
                const productUpdated = {
                    ...productoEnElCarrito,
                    cantidad: producto.cantidad,
                };
                return productUpdated;
            } else {
                return productoEnElCarrito;
            }
        });
        setCart(cartUpdated);
    };

    // borrar carrito
    const borrarCart = () => setCart([]);


    // borrar un producto del carrito
    const borrarProducto = (id) => setCart(cart.filter(producto => producto.id !== id));

    // total de unidades
    const totalUnidades = () => {
        const copiaCart = [...cart];
        let count = 0;
        copiaCart.forEach((producto) => {
            count = count + producto.cantidad;
        });
        return count;
    };

    // total de precio
    const totalPrecio = () => {
            const copia = [...cart];
            let count = 0;
            copia.forEach((producto) => {
                count = count + producto.cantidad * producto.precio;
            });
            return count;
        };

    
        return (
        <CartContext.Provider
        value={{
            addProducto,
            borrarCart,
            totalUnidades,
            totalPrecio,
            borrarProducto,
            cart          
        }}
        >
            {props.children}
        </CartContext.Provider>
        )
    }


export default CartProvider;