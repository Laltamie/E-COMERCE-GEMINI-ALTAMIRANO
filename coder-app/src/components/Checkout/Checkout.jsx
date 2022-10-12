import React from 'react';
import { useState } from 'react';
import Form from '../Formulario/Form';
import "../Checkout/Checkout.css"; 

const Checkout = () => {

    const [ordenId, setOrdenId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrdenId(numeroDeOrden);
    };

    if (ordenId) {
        return (
            <h1>
                Gracias por tu compra, te dejamos el número de seguimiento:{' '}
                {ordenId}
            </h1>
        );
    }
    

    return (
        <div className="d-flex justify-content-center contenedor-form" >
            <Form handleId={handleId}/>
        </div>
    );
};

export default Checkout;