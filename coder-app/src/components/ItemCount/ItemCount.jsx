import React from "react";
import { useState, useEffect } from "react";
import "../ItemCount/ItemCount.css"

const ItemCount = ({inicial, stock, agregarProducto}) => {

    const [contador, setContador] = useState(parseInt(inicial));

    const decrementar = () => {
        setContador(contador - 1);
    };

    const incrementar = () => {
        setContador(contador + 1);
    };

    useEffect(() => {
        setContador(parseInt(inicial));
    },[inicial]);

    return (
        <div className="container">
            <div>
                    <p className="text-center">Nombre del Producto</p>
                    <div className="input-group py-2">
                        <input type="button" className="btn btn-secondary" disabled={contador <= 1} value="-" onClick={decrementar}/>
                        <input type="text" className="form-control" value={contador} onChange={() => {}} />
                        <input type="button" className="btn btn-secondary" disabled={contador >= stock} value="+" onClick={incrementar}/>
                    </div>
                    <div className="d-grid gap-2">
                            <input type="button" className="btn btn-secondary" disabled={stock <= 0} onClick={() => agregarProducto(contador)} value="Agregar al Carrito" />
                        
                    </div>
                </div>
        </div>
        
    )
};

export default ItemCount;