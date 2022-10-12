import React, { useContext } from "react";
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useState} from "react";
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(0);
    const { addProducto } = useContext(CartContext);

    const agregarProducto = (cantidad) => {
        setCantidad(cantidad);
        addProducto(item, cantidad);
    };

    return (
        <>
        <div key={item.id} className="container">
            <ul>
                <li>
                    <div className="container conten-detalle">
                    <img src={'/images/' + item.img} className="card-img-top card-ItemD" width="150px" alt={item.name} />
                        <div className="conetenedor-detalle">
                            <h2>{item.name}</h2>
                                <p>
                                     {item.descripcion}
                                 </p>
                                <h3>$ {item.precio}</h3>
                                <hr />

                                {cantidad === 0 ? (
                                    <div>
                                        <ItemCount stock={item.stock} inicial={1} agregarProducto={agregarProducto}/>

                                    </div>
                                    
                                ) : (
                                    <div >
                                        <ItemCount inicial={1} agregarProducto={agregarProducto}/> 
                                    </div>
                                )}
    
                        </div>
                    </div>
                </li>        
                <li>

                </li>
            </ul>
        </div>
        </>
    )
};

export default ItemDetail;

